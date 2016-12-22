import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    private authUrl: string;
    private loggedIn: boolean;
    private headers: Headers;

    constructor(private _http: Http, private _router: Router) {
        this.authUrl = "http://127.0.0.1:5000/auth";
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        this.loggedIn = !!window.localStorage.getItem('token');
    }

    loginUser(username: string, password: string) {
        this.authUrl += '/login'
        return this._http.post(("http://127.0.0.1:5000/auth/login"), JSON.stringify({ username, password }),
            { headers: this.headers })
            .map((res) => {
                console.log(res);
                if (res.json().token) {
                    window.localStorage.setItem('username', res.json().username);
                    window.localStorage.setItem('token', res.json().token);
                    this.headers.append("Authentication", "Token " + res.json().token);
                    this.loggedIn = true;
                    return res.json().token;
                }
            })
            .catch(this.handleError);
    }

    registerUser(username: string, password: string) {
        this.authUrl += '/register'
        return this._http.post(("http://127.0.0.1:5000/auth/register"), JSON.stringify({ username, password }),
            { headers: this.headers })
            .map((res) => {
                this._router.navigate(['/auth'])
                return res.json().username;
            })
            .do(res => console.log('All: ' + JSON.stringify(res)))
            .catch(this.handleError);
    }

    logoutUser() {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('token');
        this.loggedIn = false;
        this._router.navigate(['/auth']);
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    getHeaders(): Headers {
        return this.headers;
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}
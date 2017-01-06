import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IBucketlist } from './bucketlist';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BucketlistService {
    private bucketlistUrl = "http://127.0.0.1:5000/bucketlists";
    private headers: Headers;

    constructor(private _http: Http, private _authService: AuthService) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        let auth_token = localStorage.getItem('token');
        this.headers.append("Authorization", auth_token);
    }

    getBucketlists(): Observable<IBucketlist[]> {
        return this._http.get((this.bucketlistUrl), { headers: this.headers })
            .map((response: Response) => <IBucketlist[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createBucketlists(name: string, description: string): Observable<any> {
        let data = JSON.stringify({ name: name, description: description })
        return this._http.post((this.bucketlistUrl), data,
            { headers: this.headers })
            .map((data) => {
                console.log(data);
            })
            .do((data) => {
                console.log(data);
            })
            .catch(this.handleError)
    }

    updateBucketlist(id: number, name: string, description: string): Observable<any> {
        let data = JSON.stringify({ name: name, description: description })
        return this._http.put((this.bucketlistUrl + "/" + id), data, { headers: this.headers })
            .map(data => {
                console.log(data);
            })
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    deleteBucketlist(id: number) {
        return this._http.delete((this.bucketlistUrl + "/" + id), { headers: this.headers })
            .map(data => {
                console.log(data);
            })
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    getBucketlistItems(id: number) {
        return this._http.get((this.bucketlistUrl + "/" + id), { headers: this.headers })
            .map((response: Response) => <IBucketlist>response.json())
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    createBucketlistItem(id: number, name: string, done: boolean) {
        let data = JSON.stringify({ name: name, done: done });
        return this._http.post((this.bucketlistUrl + "/" + id + "/items"), data, { headers: this.headers })
            .map(data => {
                console.log(data);
            })
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    updateBucketlistItem(bucketlistId: number, itemId: number, name: string, done: boolean) {
        let data = JSON.stringify({ name: name, done: done });
        return this._http.put((this.bucketlistUrl + "/" + bucketlistId + "/items/" + itemId), data, { headers: this.headers })
            .map(data => {
                console.log(data);
            })
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    deleteBucketlistItem(bucketlistId: number, itemId: number) {
        return this._http.delete((this.bucketlistUrl + "/" + bucketlistId + "/items/" + itemId), { headers: this.headers })
            .map(data => {
                console.log(data);
            })
            .do(data => {
                console.log(data);
            })
            .catch(this.handleError);
    }

    addHeaders() {
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        let auth_token = localStorage.getItem('token');
        this.headers.append("Authorization", auth_token);
        return this.headers;
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
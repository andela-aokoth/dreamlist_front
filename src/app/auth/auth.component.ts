import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  // Login Data
  currentUser: string;
  loginUsername: string;
  loginPassword: string;
  // Registration Data
  registerUsername: string;
  registerEmailAddress: string;
  registerPassword: string;
  registerConfirmPassword: string;
  errorMessage = "";
  welcomeMessage = "";

  constructor(private _authService: AuthService, private _router: Router) {
    if (this._authService.isLoggedIn) {

    }
  }

  loginUser(): void {
    this._authService.loginUser(this.loginUsername, this.loginPassword).subscribe(
      (data) => {
        if (data) {
          this._router.navigate(['/bucketlists']);
        };
      },
      (error) => {
        if (error) {
          this.errorMessage = "Invalid Username/Password";
          this.errorHandler(error);
        }
      }
    )
  }

  registerUser(): void {
    this._authService.registerUser(this.registerUsername, this.registerPassword).subscribe(
      (data) => {
        if (data) {
          // this._router.navigate(['/auth']);
          this.welcomeMessage = "Please login to continue";
          console.log(this.welcomeMessage);
        };
      },
      (error) => {
        if (error) {
          this.errorHandler(error)
        };
      }
    )
  }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/bucketlists']);
    } else {
      this._router.navigate(['/auth']);
    }
  }

  errorHandler(error: any): void {
    console.log(error);
  }

}

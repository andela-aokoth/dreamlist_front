import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginUsername: string;
  loginPassword: string;
  registerUsername: string;
  registerEmailAddress: string;
  registerPassword: string;
  registerConfirmPassword: string;

  constructor() { }

  ngOnInit() {
  }

}

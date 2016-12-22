import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BucketlistService } from './bucketlist/bucketlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, BucketlistService]
})
export class AppComponent {
  pageTitle: string = 'Dream List';
}

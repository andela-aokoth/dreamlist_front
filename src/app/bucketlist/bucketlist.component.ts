import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BucketlistService } from './bucketlist.service';
import { IBucketlist } from './bucketlist';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  currentUser: string;
  bucketlists: IBucketlist[];
  errorMessage: string;

  bucketlistId: number;
  bucketlistName: string;
  bucketlistDescription: string;

  constructor(private _authService: AuthService, private _bucketlistService: BucketlistService, private _router: Router) {

  }

  getModalValues(id, name, desc) {
    this.bucketlistId = id;
    this.bucketlistName = name
    this.bucketlistDescription = desc
  }

  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      this.currentUser = window.localStorage.getItem('username');
      this._router.navigate(['/bucketlists']);
    } else {
      this._router.navigate(['/auth']);
    }

    this._bucketlistService.getBucketlists()
      .subscribe(bucketlists => this.bucketlists = bucketlists,
      error => this.errorMessage = <any>error);
  }

  createBucketlist(): void {
    this._bucketlistService.createBucketlists(this.bucketlistName, this.bucketlistDescription).subscribe(
      blist => {
        console.log(blist);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  }

  updateBucketlist(): void {
    this._bucketlistService.updateBucketlist(this.bucketlistId, this.bucketlistName, this.bucketlistDescription).subscribe(
      blist => {
        console.log(blist);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  }

  deleteBucketlist(): void {
    this._bucketlistService.deleteBucketlist(this.bucketlistId).subscribe(
      blist => {
        console.log(blist);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  } 

  logoutUser(): void {
    this._authService.logoutUser();
  }

}

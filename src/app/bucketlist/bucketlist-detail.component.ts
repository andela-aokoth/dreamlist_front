import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BucketlistService } from './bucketlist.service';
import { IBucketlist } from './bucketlist';
import { IBucketlistItem } from './bucketlist-item';

@Component({
    selector: 'bucketlist-detail',
    templateUrl: './bucketlist-detail.component.html',
    styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent {
    currentUser: string;
    pageTitle: string = "Dream List Detail";
    errorMessage: string;
    itemId: number;
    itemName: string;
    itemStatus: boolean;
    bucketlist: IBucketlist[];

    constructor(private _route: ActivatedRoute, private _router: Router,
        private _authService: AuthService, private _bucketlistService: BucketlistService) {

    }

    getModalValues(id, name, status) {
        this.itemId = id;
        this.itemName = name;
        this.itemStatus = status;
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        if (this._authService.isLoggedIn()) {
            this.currentUser = window.localStorage.getItem('username');
            this._router.navigate(['/bucketlists/' + id]);
        } else {
            this._router.navigate(['/auth']);
        }
        this._bucketlistService.getBucketlistItems(id)
            .subscribe(bucketlist => this.bucketlist = bucketlist[0],
            error => this.errorMessage = <any>error);
        console.log(this.bucketlist);
    }

    addBucketlistItem(): void {
        let id = this._route.snapshot.params['id'];
        this._bucketlistService.createBucketlistItem(id, this.itemName, this.itemStatus).subscribe(
            bucketlistItem => {
                console.log(bucketlistItem);
            },
            (error) => {
                console.log(error);
            }
        );
        window.location.reload();
    }

    updateBucketlistItem(): void {
        let bucketlistId = this._route.snapshot.params['id'];
        let itemId = this.itemId;
        this._bucketlistService.updateBucketlistItem(bucketlistId, itemId, this.itemName, this.itemStatus).subscribe(
            bucketlistItem => {
                console.log(bucketlistItem);
            },
            (error) => {
                console.log(error);
            }
        );
        window.location.reload();
    }

    deleteBucketlistItem(): void {
        let bucketlistId = this._route.snapshot.params['id'];
        let itemId = this.itemId;
        this._bucketlistService.deleteBucketlistItem(bucketlistId, itemId).subscribe(
            bucketlistItem => {
                console.log(bucketlistItem);
            },
            (error) => {
                console.log(error);
            }
        );
        window.location.reload()
    }

}
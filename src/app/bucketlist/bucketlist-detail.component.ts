import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'bucketlist-detail',
    templateUrl: './bucketlist-detail.component.html',
    styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent {
    pageTitle: string = "Dream List Detail";
    items: Array<any> = [
        {
            "item_id": 1,
            "name": "JavaScript",
            "date_created": "12th December 2015",
            "date_modified": "12th December 2015",
            "done": true
        },
        {
            "item_id": 2,
            "name": "AngularJS",
            "date_created": "12th December 2015",
            "date_modified": "12th December 2015",
            "done": false
        },
        {
            "item_id": 3,
            "name": "NodeJS",
            "date_created": "12th December 2015",
            "date_modified": "12th December 2015",
            "done": false
        },
        {
            "item_id": 5,
            "name": "Python",
            "date_created": "12th December 2015",
            "date_modified": "12th December 2015",
            "done": false
        }
    ];

    constructor(private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }


}
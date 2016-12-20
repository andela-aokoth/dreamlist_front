import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  bucketlists: Array<any> = [
    {
      "bucketlist_id": 1,
      "name": "Pluralsight Learning Paths",
      "date_created": "12th December 2015",
      "date_modified": "12th December 2015",
      "description": "Getting the best out of my Pluralsight subscription",
      "items": [
        {
          "item_id": 1,
          "name": "JavaScript",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
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
          "name": "Python",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        }
      ]
    },
    {
      "bucketlist_id": 2,
      "name": "Before Turning Twenty Five",
      "date_created": "12th December 2015",
      "date_modified": "12th December 2015",
      "description": "Getting the best out of my Pluralsight subscription",
      "items": [
        {
          "item_id": 1,
          "name": "Tomorrowland",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 2,
          "name": "Google I/O",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 3,
          "name": "WWDC",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        }
      ]
    },
    {
      "bucketlist_id": 3,
      "name": "Before Turning Scary Thirty",
      "date_created": "12th December 2015",
      "date_modified": "12th December 2015",
      "description": "Getting the best out of my Pluralsight subscription",
      "items": [
        {
          "item_id": 1,
          "name": "Tomorrowland",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 2,
          "name": "Google I/O",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 3,
          "name": "WWDC",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        }
      ]
    },
    {
      "bucketlist_id": 4,
      "name": "Before Turning Thirty Five",
      "date_created": "12th December 2015",
      "date_modified": "12th December 2015",
      "description": "Getting the best out of my Pluralsight subscription",
      "items": [
        {
          "item_id": 1,
          "name": "Tomorrowland",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 2,
          "name": "Google I/O",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        },
        {
          "item_id": 3,
          "name": "WWDC",
          "date_created": "12th December 2015",
          "date_modified": "12th December 2015",
          "done": false
        }
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

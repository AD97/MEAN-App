import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  UserDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.UserDetails = {
      'name': this.route.snapshot.paramMap.get('name'),
      'desc': this.route.snapshot.paramMap.get('desc'),
      'state': '',
      'age': '',
      'ethnicity': '',
      'race': '',
      'sex': '',
      'height': '',
      'weight': '',
    }
  }

  proceed() {
    let body = this.UserDetails;
    this.http.post('http://localhost:8080/api/users', body).subscribe(data => {
      console.log(data);
    })
    console.log(body);
    console.log(this.UserDetails);
  }
}


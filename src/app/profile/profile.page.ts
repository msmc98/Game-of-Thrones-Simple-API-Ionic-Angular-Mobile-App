import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string;
  dataProfile: any = new Map();

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.profileId = params.id;
    });
    this.http
      .get('http://thronesapi.com/api/v2/Characters/' + this.profileId)
      .subscribe((res) => {
        console.log(res);
        for (let key in res) {
          this.dataProfile.set(key, res[key]);
        }
        console.log(this.dataProfile);
      });
  }
}

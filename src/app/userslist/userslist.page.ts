import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  characterDetails: any = new Map();
  characters = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('http://thronesapi.com/api/v2/Characters')
      .subscribe((res) => {
        // console.log(res);
        res.forEach((character) => {
          this.characters.push(character);
        });

        // for (var i = 0; i < res.length; i++) {
        //   Object.entries(res[i]).forEach(([key, value]) => {
        //     this.characters.set(value);
        //   });
        // }

        // this.characters = res['results'];
        console.log(this.characters);
      });
  }
}

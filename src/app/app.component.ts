import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: any;

  constructor(private http: HttpClient) {}

  search() {
    this.http.get('https://api.unsplash.com/photos/random/?client_id=KfeHbiF-wbdoRKQwOEFc5J3W5cf1O6MkGbhaPuE-Aoc')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }
}
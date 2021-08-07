import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-production/api-interfaces';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/songs', icon: 'view_list', title: 'Songs' },
  ];
  bannersIndex: number[] = [1, 2, 3, 4];
  constructor(private http: HttpClient) {}
}

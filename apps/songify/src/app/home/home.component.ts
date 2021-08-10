import { SongService } from '@angular-production/core-data';
import { Observable } from 'rxjs';
import { Song } from '@angular-production/api-interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  songs$: Observable<Song[]>;
  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }
}

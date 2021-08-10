import { Observable } from 'rxjs';
import { SongService } from '@angular-production/core-data';
import { Component, OnInit } from '@angular/core';
import { Song } from '@angular-production/api-interfaces';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }

  songs$: Observable<Song[]>;
}

import { Song } from '@angular-production/api-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-production-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.scss'],
})
export class SongsDetailsComponent implements OnInit {
  currentSong: Song;
  songTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set song(value: Song) {
    if (value) this.songTitle = value.title;
    this.currentSong = { ...value };
  }

  constructor() {}

  ngOnInit(): void {}
}

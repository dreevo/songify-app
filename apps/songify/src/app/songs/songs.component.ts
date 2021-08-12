import { SongService } from '@angular-production/core-data';
import { Observable } from 'rxjs';
import { Song } from '@angular-production/api-interfaces';
import { Component, OnInit } from '@angular/core';

const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Far Beyond The Sun',
    description: 'A neo classical song by Yngwie Malmsteen',
  },
  {
    id: '2',
    title: 'Sega Sunset',
    description: 'A witch house banger by non other than Lorn ',
  },
  {
    id: '3',
    title: 'Norton Commander',
    description: 'A chill alternative song by Men I Trust',
  },
];

const emptySong: Song = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'angular-production-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songs: Song[];
  songs$: Observable<Song[]>;
  selectetSong: Song;
  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songs$ = this.songService.all();
    this.selectetSong = emptySong;
  }

  selectSong(song: Song) {
    this.selectetSong = song;
  }

  deleteSong(song: Song) {
    this.songService
      .delete(song)
      .subscribe((res) => (this.songs$ = this.songService.all()));
    this.selectetSong = emptySong;
  }

  saveSong(song: Song) {
    if (song.id) {
      this.updateSong(song);
    } else {
      this.createSong(song);
    }
  }

  updateSong(song: Song) {
    this.songService
      .update(song)
      .subscribe((res) => (this.songs$ = this.songService.all()));
    this.resetSongDetails();
  }

  createSong(song: Song) {
    this.songService
      .create(song)
      .subscribe((res) => (this.songs$ = this.songService.all()));
    this.resetSongDetails();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }

  resetSongDetails() {
    this.selectetSong = emptySong;
  }
}

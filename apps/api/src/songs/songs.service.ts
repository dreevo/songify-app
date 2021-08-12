import { Song } from '@angular-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongsService {
  songs: Song[] = [
    {
      id: '1',
      title: 'boerd - Blind',
      description: 'A chill song by boerd from the album Static',
    },
    {
      id: '2',
      title: 'RÜFÜS - Simplicity is Bliss',
      description: 'A cool song by rufus from the album atlas',
    },
    {
      id: '3',
      title: 'NoMBe - Do Whatchu Want To Me',
      description: 'They Mightve Even Loved Me',
    },
    {
      id: '4',
      title: 'MIKNNA - Us',
      description: 'Such an underrated song',
    },
  ];
  create(song: Song) {
    this.songs = [...this.songs, Object.assign({}, song, { id: uuidv4() })];
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find((song) => song.id === id);
  }

  update(id: string, song: Song) {
    this.songs = this.songs.map((s) => (s.id === id ? song : s));
    return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter((song) => song.id !== id);
    return this.songs;
  }
}

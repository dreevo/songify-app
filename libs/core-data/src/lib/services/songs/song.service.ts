import { Song } from '@angular-production/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ENDPOINT = 'http://localhost:3000/songs';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Song[]>(ENDPOINT);
  }

  find(id: string) {
    return this.http.get<Song>(ENDPOINT + `/${id}`);
  }

  create(song: Song) {
    return this.http.post(ENDPOINT, song);
  }

  update(song: Song) {
    return this.http.put(ENDPOINT + `/${song.id}`, song);
  }

  delete(song: Song) {
    return this.http.delete(ENDPOINT + `/${song.id}`);
  }
}

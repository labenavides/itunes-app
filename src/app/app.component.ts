import { Component, Inject, inject } from '@angular/core';
import { ItunesService } from './services/itunes.service';
import { Song } from './models/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'itunes-app';
  songs: Song[] = [];
  constructor(private itunesService : ItunesService) { }

  findSongs(artistName: string){
    console.log('artistname', artistName);
    this.itunesService.getSongs(artistName).subscribe(data => {
      this.songs = data.canciones;
    })
}}


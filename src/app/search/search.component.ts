import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../services/itunes.service';
import { Song } from '../models/song';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  songs: [Song] | undefined;

  constructor( private itunesService : ItunesService) { }

  displayedColumns: string[] = ['Nombre Canción', 'Nombre Albúm', 'Url Preview', 'Precio', 'Fecha de lanzamiento'];
  dataSource: Song[] = [];

  ngOnInit(): void {
    this.itunesService.getSongs().subscribe(data => {
      console.log("ngOnInit. FIN", data.canciones);
      this.songs = data.canciones;
      this.dataSource = data.canciones;
    });


  }

}

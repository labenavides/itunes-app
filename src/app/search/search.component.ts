import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItunesService } from '../services/itunes.service';
import { Song } from '../models/song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  songs: Song[] = [];
  inputName: string = "";
  @Output() artistName = new EventEmitter<string>();

  constructor( private itunesService : ItunesService) { }

  dataSource: Song[] = [];

  ngOnInit(): void {}

  onClickSearch(){
    this.artistName.emit(this.inputName);
  }
  changeName(event: any){
    this.inputName = event.target.value;
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Song } from '../models/song';

@Component({
  selector: 'app-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.css']
})
export class DisplayinfoComponent implements OnChanges {

  @Input() songsList: Song[] = [];
  displayedColumns: string[] = ['nombre_tema', 'nombre_album', 'preview_url', 'precio._valor', 'fecha_lanzamiento'];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }



}

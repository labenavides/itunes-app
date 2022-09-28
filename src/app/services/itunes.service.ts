import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
//TODO get artist name from input

  private apiUrl = "http://localhost:3000/v1/search_tracks";

  constructor(private http: HttpClient) {}

  public getSongs(artistName: string):  Observable<Response> {
    let queryParams = new HttpParams().append("name",artistName);
    this.apiUrl.concat(artistName);
    return this.http.get<Response>(this.apiUrl,{params:queryParams});
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  private apiUrl = "http://localhost:3000/v1/search_tracks?name=incubus";

  constructor(private http: HttpClient) {}

  public getSongs():  Observable<Response> {
    return this.http.get<Response>(this.apiUrl);
}
}

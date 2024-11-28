import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../../model/film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiURL: string = 'http://localhost:8081/films/api/all';
  films! : Film[]; 
  constructor(private http : HttpClient) { }

  listefilm(): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiURL);
    }

}

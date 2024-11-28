import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../../model/film.model';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmComponent implements OnInit{

  films! : Film[];
   constructor(private filmService: FilmService) {
    this.films = [];
    }
    
  
  
    ngOnInit(): void {

      this.chargerFilms();
    }
  
    chargerFilms(){
      this.filmService.listefilm().subscribe(films => {
        console.log(films);
        this.films = films;
        });
    }
  

  



}



 
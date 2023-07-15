import { Component, OnInit } from '@angular/core';
import { Film } from '../core/Films';
import { FilmService } from '../core/services/film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  films : Film[]=[]
  constructor(private _filmService:FilmService) { }

  ngOnInit(): void {
    this._filmService.getFilms().subscribe((data)=>this.films=data.filter((film)=>film.public==true))
  }

}

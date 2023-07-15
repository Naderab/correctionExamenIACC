import { Component, OnInit } from '@angular/core';
import { Film } from '../core/Films';
import { FilmService } from '../core/services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  film: Film = new Film();
  constructor(private _filmsService:FilmService,private _router:Router) { }

  ngOnInit(): void {
  }

  addFilm() {
    this.film.views = 0;
    this.film.public = true;
    this._filmsService.addFilm(this.film).subscribe(()=>this._router.navigate(['/list']))
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../Films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  filmUrl = "http://localhost:3000/films"
  constructor(private _http: HttpClient) { }
  
  addFilm(film: Film) {
    return this._http.post(this.filmUrl, film);
  }

  getFilms() {
    return this._http.get<Film[]>(this.filmUrl)
  }

  getFilmById(id: number) {
    return this._http.get<Film>(this.filmUrl + "/" + id)
  }

  updateFilm(film: Film) {
    console.log(film);

    return this._http.put(this.filmUrl + "/" + film.id, film)
  }
}

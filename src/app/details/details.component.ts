import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../core/services/film.service';
import { Film } from '../core/Films';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  id!: number;
  film : Film = new Film();
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _consumer: FilmService
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params["id"];
    this._consumer.getFilmById(this.id).subscribe((data) => {
      this.film = data; this.film.views = this.film.views + 1;
      console.log(this.film)
      this._consumer.updateFilm(this.film).subscribe();
    });
   
  }
}

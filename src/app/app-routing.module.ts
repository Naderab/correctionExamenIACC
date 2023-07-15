import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'addFilm', component: AddFilmComponent },
  { path: 'list', component: ListFilmComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

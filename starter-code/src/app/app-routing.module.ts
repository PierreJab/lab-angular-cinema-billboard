import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesService } from './movies.service';

const routes: Routes = [
  // router.get('/', ...
  { path: '', component: MyHomeComponentComponent },

  // router.get('/home', ...
  { path: 'home', component: MyHomeComponentComponent },

  // router.get('/movie/:blahId', ...
  { path: 'movie/:id', component: MyMovieComponentComponent },

  // Handle all other URLs (MUST BE LAST)
//   { path: '**', component: MyHomeComponentComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})

export class AppRoutingModule { }

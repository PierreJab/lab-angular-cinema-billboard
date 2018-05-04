import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService, movie } from '../movies.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: number;
  movieInfo: movie;
  // movieInfo: 
  // let movieInfo;

  constructor(
    private reqThang: ActivatedRoute,
    public movieTruc: MoviesService, 
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqThang.paramMap
      .subscribe((myParams) => {
                  // { path: 'contact/:blahId', ... }
        this.movieId = Number(myParams.get('id'));
                         // req.params.blahId

        this.movieInfo = this.movieTruc.getMovie(this.movieId);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId: number | undefined;
  movie: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;  // Get the ID from the route
    this.fetchMovieDetails();
  }

  fetchMovieDetails() {
    // Simulate fetching movie data (replace with actual service call)
    const movies = [
      { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, description: 'A mind-bending thriller by Christopher Nolan.' },
      { id: 2, title: 'The Dark Knight', genre: 'Action', year: 2008, description: 'Batman faces off against the Joker.' },
      { id: 3, title: 'Interstellar', genre: 'Sci-Fi', year: 2014, description: 'A space exploration movie directed by Christopher Nolan.' }
    ];
    
    this.movie = movies.find(m => m.id === this.movieId);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';


interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: string;
  description: string;
  poster: string;
  trailerId: string;
  language: 'Bollywood' | 'Hollywood';
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {

  // =====================================================
  // NAVIGATION
  // =====================================================

  currentSection = 'home';


  showSection(section: string): void {

    this.currentSection = section;

    // Reset genre when leaving Genres section
    if (section !== 'genres') {
      this.selectedGenre = 'All';
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  // =====================================================
  // SEARCH
  // =====================================================

  searchTerm = '';

  searchMovies(): void {
  this.currentSection = 'movies';

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


  // =====================================================
  // GENRES
  // =====================================================

  selectedGenre = 'All';

  genres = [
    'All',
    'Action',
    'Drama',
    'Romance',
    'Comedy',
    'Thriller',
    'Historical',
    'Sci-Fi',
    'Adventure'
  ];


  // =====================================================
  // MOVIE DETAILS
  // =====================================================

  selectedMovie: Movie | null = null;


  // =====================================================
  // WATCHLIST
  // =====================================================

  watchlist: number[] = [];


  // =====================================================
  // TRAILER
  // =====================================================

  showTrailer = false;

  trailerMovie: Movie | null = null;

  trailerUrl: SafeResourceUrl | null = null;


  // =====================================================
  // MOVIES
  // =====================================================

  movies: Movie[] = [

    // -----------------------------------------------------
    // BOLLYWOOD
    // -----------------------------------------------------

    {
      id: 1,
      title: 'Jawan',
      year: 2023,
      genre: 'Action',
      rating: 7.0,
      duration: '2h 49m',
      description:
        'A high-octane action thriller about a man driven by a personal vendetta to correct the wrongs in society and make a difference.',
      poster: 'posters/jawan.jpeg',
      trailerId: 'COv52Qyctws',
      language: 'Bollywood'
    },


    {
      id: 2,
      title: 'Saiyaara',
      year: 2025,
      genre: 'Romance',
      rating: 8.1,
      duration: '2h 36m',
      description:
        'A romantic musical drama exploring love, dreams, relationships and emotional struggles.',
      poster: 'posters/saiyaara.jpeg',
      trailerId: '9r-tT5IN0vg',
      language: 'Bollywood'
    },

    {
      id: 3,
      title: 'Dhurandhar',
      year: 2025,
      genre: 'Action',
      rating: 8.5,
      duration: '2h 45m',
      description:
        'A high-intensity action thriller filled with powerful characters, espionage and unexpected twists.',
      poster: 'posters/dhurandhar.jpeg',
      trailerId: '',
      language: 'Bollywood'
    },


    {
      id: 4,
      title: 'War 2',
      year: 2025,
      genre: 'Action',
      rating: 7.8,
      duration: '2h 58m',
      description:
        'An explosive spy action thriller featuring Kabir and a deadly new adversary.',
      poster: 'posters/war2.jpeg',
      trailerId: 'mjBym9uKth4',
      language: 'Bollywood'
    },


    {
      id: 5,
      title: 'Sitaare Zameen Par',
      year: 2025,
      genre: 'Drama',
      rating: 8.3,
      duration: '2h 35m',
      description:
        'A heartwarming story about an unconventional basketball coach and a group of extraordinary players.',
      poster: 'posters/sitaare-zameen-par.jpeg',
      trailerId: 'YH6k5weqwy8',
      language: 'Bollywood'
    },


    {
      id: 6,
      title: 'Raid 2',
      year: 2025,
      genre: 'Thriller',
      rating: 7.7,
      duration: '2h 20m',
      description:
        'An intense battle between an honest income tax officer and a powerful political figure.',
      poster: 'posters/raid2.jpeg',
      trailerId: 'GCObs0_MszA',
      language: 'Bollywood'
    },


    {
      id: 7,
      title: 'Housefull 5',
      year: 2025,
      genre: 'Comedy',
      rating: 7.0,
      duration: '2h 26m',
      description:
        'A chaotic comedy mystery set aboard a luxury cruise filled with unexpected twists.',
      poster: 'posters/housefull5.jpeg',
      trailerId: 'xGQuT1wm2qk',
      language: 'Bollywood'
    },


    {
      id: 8,
      title: 'Drishyam',
      year: 2022,
      genre: 'Thriller',
      rating: 8.7,
      duration: '2h 20m',
      description:
        'A gripping thriller about a family whose seemingly perfect life changes after an unexpected incident.',
      poster: 'posters/drishyam3.jpeg',
      trailerId: 'cxA2y9Tgl7o',
      language: 'Bollywood'
    },


    {
      id: 9,
      title: 'Tanhaji: The Unsung Warrior',
      year: 2020,
      genre: 'Historical',
      rating: 7.5,
      duration: '2h 15m',
      description:
        'A historical action drama based on the life of Tanaji Malusare and the Battle of Sinhagad.',
      poster: 'posters/tanhaji.jpeg',
      trailerId: '6oRSN0EKPh4',
      language: 'Bollywood'
    },


    // -----------------------------------------------------
    // HOLLYWOOD
    // -----------------------------------------------------

    {
      id: 10,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
      duration: '2h 28m',
      description:
        'A skilled thief who enters the dreams of others is given an impossible mission: plant an idea inside a target’s mind.',
      poster: 'posters/inception.jpeg',
      trailerId: 'YoHD9XEInc0',
      language: 'Hollywood'
    },


    {
      id: 11,
      title: 'Interstellar',
      year: 2014,
      genre: 'Sci-Fi',
      rating: 8.7,
      duration: '2h 49m',
      description:
        'A group of explorers travels through a mysterious wormhole in search of a new home for humanity.',
      poster: 'posters/interstellar.jpeg',
      trailerId: 'zSWdZVtXT7E',
      language: 'Hollywood'
    },


    {
      id: 12,
      title: 'Avengers: Endgame',
      year: 2019,
      genre: 'Action',
      rating: 8.4,
      duration: '3h 1m',
      description:
        'The Avengers make one final attempt to undo the devastating consequences of Thanos.',
      poster: 'posters/avengers-endgame.jpeg',
      trailerId: 'TcMBFSGVi1c',
      language: 'Hollywood'
    },


    {
      id: 13,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Thriller',
      rating: 9.0,
      duration: '2h 32m',
      description:
        'Batman faces a dangerous criminal mastermind who pushes Gotham City into chaos.',
      poster: 'posters/dark-knight.jpeg',
      trailerId: 'EXeTwQWrcwY',
      language: 'Hollywood'
    },


    {
      id: 14,
      title: 'Jurassic World',
      year: 2015,
      genre: 'Adventure',
      rating: 6.9,
      duration: '2h 4m',
      description:
        'A fully operational dinosaur theme park descends into chaos when a genetically engineered dinosaur escapes.',
      poster: 'posters/jurassic-world.jpeg',
      trailerId: 'aJJrkyHas78',
      language: 'Hollywood'
    }

  ];


  // =====================================================
  // ALL MOVIES
  // =====================================================

  get filteredMovies(): Movie[] {

    const search =
      this.searchTerm
        .toLowerCase()
        .trim();


    return this.movies.filter(movie => {

      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(search) ||

        movie.genre
          .toLowerCase()
          .includes(search);


      const matchesGenre =
        this.selectedGenre === 'All' ||
        movie.genre === this.selectedGenre;


      return matchesSearch && matchesGenre;

    });

  }


  // =====================================================
  // BOLLYWOOD
  // =====================================================

  get bollywoodMovies(): Movie[] {

    return this.movies.filter(
      movie => movie.language === 'Bollywood'
    );

  }


  // =====================================================
  // HOLLYWOOD
  // =====================================================

  get hollywoodMovies(): Movie[] {

    return this.movies.filter(
      movie => movie.language === 'Hollywood'
    );

  }


  // =====================================================
  // WATCHLIST
  // =====================================================

  get watchlistMovies(): Movie[] {

    return this.movies.filter(
      movie => this.watchlist.includes(movie.id)
    );

  }


  // =====================================================
  // GENRE FILTER
  // =====================================================

  selectGenre(genre: string): void {

    this.selectedGenre = genre;

  }


  // =====================================================
  // OPEN MOVIE
  // =====================================================

  openMovie(movie: Movie): void {

    this.selectedMovie = movie;

  }


  // =====================================================
  // CLOSE MOVIE
  // =====================================================

  closeMovie(): void {

    this.selectedMovie = null;

  }


  // =====================================================
  // WATCHLIST TOGGLE
  // =====================================================

  toggleWatchlist(
    movie: Movie,
    event?: Event
  ): void {

    event?.stopPropagation();


    if (this.watchlist.includes(movie.id)) {

      this.watchlist =
        this.watchlist.filter(
          id => id !== movie.id
        );

    }

    else {

      this.watchlist.push(movie.id);

    }

  }


  // =====================================================
  // CHECK WATCHLIST
  // =====================================================

  isInWatchlist(movie: Movie): boolean {

    return this.watchlist.includes(movie.id);

  }


  // =====================================================
  // OPEN TRAILER
  // =====================================================

  openTrailer(
    movie: Movie,
    event?: Event
  ): void {

    event?.stopPropagation();


    if (!movie.trailerId) {

      alert(
        'Trailer is not available for this movie yet.'
      );

      return;

    }


    this.trailerMovie = movie;


    this.trailerUrl =
      this.sanitizer
        .bypassSecurityTrustResourceUrl(

          `https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&rel=0`

        );


    this.showTrailer = true;

  }


  // =====================================================
  // CLOSE TRAILER
  // =====================================================

  closeTrailer(): void {

    this.showTrailer = false;

    this.trailerMovie = null;

    this.trailerUrl = null;

  }


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private sanitizer: DomSanitizer
  ) {}

}
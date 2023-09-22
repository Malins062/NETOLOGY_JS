export interface ShortFilm {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
}

export interface DetailsFilm extends ShortFilm {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Metascore: number;
  imdbRating: number;
  imdbVotes: number;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: boolean;
  isFavorite?: boolean;
}
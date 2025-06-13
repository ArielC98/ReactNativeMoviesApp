import { useEffect, useState } from "react";
import * as UseCases from '../../core/use--cases'
import { moviesDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from '../../core/models/movie.model';
import { Cast } from "../../core/models/cast.model";

export const useMovie = (movieId: number) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() =>{
    loadMovie();
  },[movieId]);


  const loadMovie = async () =>{
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(moviesDBFetcher,movieId);
    const castPromise = UseCases.getMovieCastUseCase(moviesDBFetcher,movieId);

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
    console.log(cast);
    
  }

  return {
    isLoading,
    movie,
    cast
  }
}
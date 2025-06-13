import { useEffect, useState } from "react";
import * as UseCases from '../../core/use--cases'
import { moviesDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/models/movie.model";

export const useMovie = (movieId: number) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() =>{
    loadMovie();
  },[movieId]);


  const loadMovie = async () =>{
    setIsLoading(true);

    const fullMovie = await UseCases.getMovieByIdUseCase(moviesDBFetcher,movieId);

    setMovie(fullMovie);
    setIsLoading(false);

    console.log(fullMovie);
    
  }

  return {
    isLoading,
    movie
  }
}
import { useEffect, useState } from "react";
import { Movie } from "../../core/models/movie.model";
import * as UseCases from '../../core/use--cases';
import { moviesDBFetcher } from "../../config/adapters/movieDB.adapter";


export const useMovies = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    
    initialLoad();
    
  }, [])

  const initialLoad = async() => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(moviesDBFetcher);
  }
  

  return {}  
}

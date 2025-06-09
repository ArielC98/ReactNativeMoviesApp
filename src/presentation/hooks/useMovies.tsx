import { useEffect, useState } from "react";
import { Movie } from "../../core/models/movie.model";
import * as UseCases from '../../core/use--cases';
import { moviesDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPageNumber = 1;

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {

    initialLoad();

  }, [])

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(moviesDBFetcher);
    const popularPromise = await UseCases.moviesPopularUseCase(moviesDBFetcher);
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(moviesDBFetcher);
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(moviesDBFetcher);

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);

    console.log({
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,

    });
    
    
  }
  
  
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    //Methods
    popularNextPage: async() => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(moviesDBFetcher, {page: popularPageNumber});
  
      setPopular( prev => [...prev, ...popularMovies]);
    }
  }
}

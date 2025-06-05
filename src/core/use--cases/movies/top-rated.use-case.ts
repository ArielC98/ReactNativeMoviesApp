import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MoviesResponse>('/top_rated');

    return topRated.results.map(MovieMapper.fromMovieDBResultToModel)


  } catch (error) {
    throw new Error("Error fetching movies - Top Rated")
  }
}
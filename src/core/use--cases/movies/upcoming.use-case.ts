import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MoviesResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToModel)


  } catch (error) {
    throw new Error("Error fetching movies - Upcoming")
  }
}
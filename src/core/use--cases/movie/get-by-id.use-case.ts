import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../models/movie.model"



export const getMovieByIdUseCase = async(
  fetcher: HttpAdapter,
  movieId: Number,
): Promise<FullMovie> =>{
  try {
    //fetcher
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    
    const fullMovie = MovieMapper.fromMovieDBToModel(movie);

    return fullMovie;


  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
}
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovie } from "../../models/movie.model";

export const getMoviesByIdUseCase = async (fetcher: HttpAdapter, movieId: number) : Promise<FullMovie> => {
  try {
    
    

  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`)
  }
}
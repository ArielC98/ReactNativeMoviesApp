import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { Cast } from "../../models/cast.model";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";


export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number):Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);

    const actors = cast.map(CastMapper.fromMovieDBCastToModel);

    return actors;


  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`)
  }  
}
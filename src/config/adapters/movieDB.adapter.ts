import { AxiosAdapter } from "./http/axios.adapter";

export const  moviesDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params:{
    api_key: "ebedb77b36111a07bba2a5da34d494fb",
    language: "es"
  }
})
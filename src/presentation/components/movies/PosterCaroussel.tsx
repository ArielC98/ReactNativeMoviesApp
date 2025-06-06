import { Text, View } from "react-native"
import { Movie } from "../../../core/models/movie.model";
import { ScrollView } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
  height?: number;
}


export const PosterCaroussel = ({ height = 440, movies }: Props) => {
  return (
    <View style={{ height }}>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          movies.map(movie =>
            <MoviePoster
              key={movie.id}
              movie={movie}
              height={323}
              width={200}
            />
          )
        }
      </ScrollView>

    </View>
  )
}

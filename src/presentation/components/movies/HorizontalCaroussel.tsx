import { View, Text } from "react-native"
import { Movie } from "../../../core/models/movie.model";
import { FlatList } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
  title: string;
}

export const HorizontalCaroussel = ({ movies, title }: Props) => {
  return (
    <View
      style={{ height: title ? 260 : 220 }}
    >
      <Text
        style={{
          fontSize:30,
          fontWeight:'300',
          marginLeft: 10,
          marginBottom: 10
        }}
      >
        {title}
      </Text>

      <FlatList
        data={movies}
        renderItem={({item})=>(
          <MoviePoster movie={item} width={140} height={200}/>
        )}
        keyExtractor = {item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator
      />

    </View>
  )
}

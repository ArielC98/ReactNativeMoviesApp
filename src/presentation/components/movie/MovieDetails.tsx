import { Text, View } from "react-native"
import { FullMovie } from "../../../core/models/movie.model";
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({ movie }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating.toPrecision(2)}</Text>

          <Text style={{ marginLeft: 5 }}>
            - {movie.genres.join(', ')}
          </Text>

        </View>
        {/* Sinopsis */}
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
          Sinopsis
        </Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>

        {/* Budget */}
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Budget</Text>
        <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{
            fontSize: 20,
            marginVertical: 10,
            fontWeight: "bold",
            // marginHorizontal: 20
          }}>
            Cast
          </Text>
        </View>
      </View>
    </>
  )
}

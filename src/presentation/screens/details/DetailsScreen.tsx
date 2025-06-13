
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.title}
        title={movie!.title}
        poster={movie!.poster}
      />
      {/* Details */}
    </View>
  )
}
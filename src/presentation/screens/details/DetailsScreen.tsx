
import { Text } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader/>
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.title}
        title={movie!.title}
        poster={movie!.poster}
      />
      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}
import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCaroussel } from "../../components/movies/PosterCaroussel";


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <PosterCaroussel 
          movies={nowPlaying}
          height={323}
        />
      </View>
    </ScrollView>
  )
}

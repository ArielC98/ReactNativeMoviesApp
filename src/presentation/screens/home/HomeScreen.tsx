import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCaroussel } from "../../components/movies/PosterCaroussel";
import { HorizontalCaroussel } from "../../components/movies/HorizontalCaroussel";


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if (isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Principal */}
        <PosterCaroussel 
          movies={nowPlaying}
          height={323}
        />
        {/* Populars */}
        <HorizontalCaroussel
          movies={popular}
          title="Popular"
          loadNextPage={() => console.log("end reached")
          }
        />
        <HorizontalCaroussel
          movies={topRated}
          title="Top Rated"
        />
        <HorizontalCaroussel
          movies={upcoming}
          title="Upcoming"
        />
      </View>
    </ScrollView>
  )
}

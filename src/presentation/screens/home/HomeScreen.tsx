import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCaroussel } from "../../components/movies/PosterCaroussel";
import { HorizontalCaroussel } from "../../components/movies/HorizontalCaroussel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return <FullScreenLoader/>
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
          loadNextPage={popularNextPage
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

import { Image, Pressable, StyleSheet, View } from "react-native"
import { Movie } from "../../../core/models/movie.model"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/Navigation";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details',{movieId:movie.id})}
      style = {({pressed}) => ({
        width,
        height,
        marginHorizontal: 1,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: movie.poster }}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 3,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  }
})
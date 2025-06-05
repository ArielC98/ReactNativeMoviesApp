import { Image, StyleSheet, View } from "react-native"
import { Movie } from "../../../core/models/movie.model"

interface Props{
  movie: Movie;
}

export const MoviePoster = ({movie}:Props) => {
  return (
    <View style = {{...styles.imageContainer,width:200,height:323}}>
      <Image
        style = {styles.image}
        source={{uri:movie.poster}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    borderRadius: 18
  },
  imageContainer:{
    flex:1,
    marginHorizontal: 8,
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
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  // movie: FullMovie;
  poster: string;
  originalTitle: string;
  title: string;
}


export const MovieHeader = ({poster, originalTitle, title}:Props) => {
  
  const {height: screenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <>
      <View style={{...styles.imageContainer, height: screenHeight * 0.7, padding:20, marginTop: 45}}>
        <View style = {styles.imageBorder}>
          <Image
            style = {styles.posterImage}
            source={{uri: poster}}
          />
        </View>
      </View>

      <View style = {styles.marginContainer}>
        <Text style = {styles.subTitle}>{originalTitle}</Text>
        <Text style = {styles.title}>{title}</Text>
      </View>

      <View style = {styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style ={styles.backButtonText}>Go back</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10,

    elevation: 20,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 20,
  },
  backButtonText: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'condensed',
    // textShadowColor: 'rgba(0, 0, 0, 0.55)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10,
  },
});
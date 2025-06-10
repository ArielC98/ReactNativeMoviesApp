
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps <RootStackParams, 'Details'> {

}

export const DetailsScreen = ({route}:Props) => {
  
  const {movieId} = route.params;

  

  return (
    <View>
      <Text>{movieId}</Text>
    </View>
  )
}
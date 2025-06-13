
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useMovie } from "../../hooks/useMovie";

interface Props extends StackScreenProps <RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}:Props) => {
  
  const {movieId} = route.params;
  const {} = useMovie(movieId);

  

  return (
    <View>
      {/* Header */}
      
      {/* Details */}
    </View>
  )
}
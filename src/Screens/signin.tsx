import {View, Button, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "../routes";

export default function SignIn() {
  const {navigate} = useNavigation<StackProps>()
  return(
    <View style={styles.container}>
      <Button title="Entrar" onPress={() => navigate("home")} />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
title:{
  fontSize: 26,
}
})
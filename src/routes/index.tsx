import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack"
import SignIn from "../Screens/signin"
import Dashboard from "../Screens/dashboard"

type StackRouteList = {
  signin: undefined,
  dashboard: undefined,
  home: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<StackRouteList>()
export type StackProps = NativeStackNavigationProp<StackRouteList>

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="signin"  component={SignIn}
        options={{headerShown: false}}
        />
        <Screen name="dashboard" component={Dashboard} />

      </Navigator>
    </NavigationContainer>
  )
}
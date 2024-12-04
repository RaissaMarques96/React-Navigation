import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignIn from "../Screens/signin";
import Dashboard from "../Screens/dashboard";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={SignIn}
          options={{
            drawerIcon: ({ size, color, focused }) => (
              <Feather
                name="home"
                size={size}
                color={focused ? "green" : "red"}
              />
            ),
          }}
        />
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({ size, color, focused }) => (
              <Feather
                name="grid"
                size={size}
                color={focused ? "green" : "red"}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

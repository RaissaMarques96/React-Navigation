import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "../Screens/signin";
import Dashboard from "../Screens/dashboard";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="home"
          component={SignIn}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Feather
                name="home"
                size={size}
                color={focused ? "green" : "red"}
              />
            ),
          }}
        />
        <Screen
          name="dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
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

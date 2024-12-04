import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Dashboard from "../Screens/dashboard";
import Profile from "../Screens/profile";
import SignIn from "../Screens/signin";
import { Feather } from "@expo/vector-icons";

export type StackRouteList = {
  signin: undefined;
  home: undefined;
};

const BottomTabsNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Feather
              name="user"
              size={size}
              color={focused ? "green" : "red"}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export type StackProps = NativeStackNavigationProp<StackRouteList>;

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<StackRouteList>();
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="signin"
          component={SignIn}
        />
        <Screen
          name="home"
          component={BottomTabsNavigator}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;

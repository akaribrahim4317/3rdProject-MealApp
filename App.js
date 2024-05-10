import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from "./screens/MealOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <DrawerNavigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ccc" },
        headerTintColor: "black",
        sceneContainerStyle: { backgroundColor: "white" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </DrawerNavigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ccc" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals Over View" component={MealOverViewScreen} />
          <Stack.Screen
            name="Meal Detail"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

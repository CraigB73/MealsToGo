import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantContext } from "../../services/restaurants.context";

import { RestaurantScreens } from "../../features/restaurants/screens/restaurant.screens";
const RestaurantStack = createStackNavigator();

 export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.iNavigator>
      <RestaurantStack.Screen
        name='restaurants'
        component={RestaurantScreens}

      />
     </RestaurantStack.iNavigator>
  )
}
import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Text } from 'react-native';

import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screens";

const RestaurantStack  = createStackNavigator();

 export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerMode: 'none', ...TransitionPresets.ModalPresentationIOS, }}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantScreen}

      />
      <RestaurantStack.Screen 
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
        />
     </RestaurantStack.Navigator>
  )
}
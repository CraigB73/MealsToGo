import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { MapScreen } from '../../features/map/screens/map.screen';


import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';



const Tab = createBottomTabNavigator();
  
  const TAB_ICON = {
    Restaurant: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };
 
    
const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>);
  


  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
  
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={arg => {
            return ({
              ...createScreenOptions(arg),
              tabBarActiveTintColor: 'seagreen',
              tabBarInactiveTintColor: 'brown',
            });
          }}
       >
        <Tab.Screen options={{headerShown:false}} name="Restaurant" component={RestaurantsNavigator} />
        <Tab.Screen options={{headerShown:false}} name="Map" component={MapScreen} />
        <Tab.Screen options={{headerShown:false}} name="Settings" component={Settings} />
     </Tab.Navigator>
   </NavigationContainer>
  )
}


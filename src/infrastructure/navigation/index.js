
import React,{ useContext} from 'react'
import { AppNavigator } from './app.navigator'
import { View, Text } from 'react-native';


import { AuthenticationContext } from '../../services/authentication/authentication.context'
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  
  return isAuthenticated ? (
    <AppNavigator />
  ) : (
      <View>
        <Text>No Authenticated</Text>
      </View>
    )
  }


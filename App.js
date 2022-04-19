import React, { useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';


import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

import { RestaurantContextProvider } from './src/services/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextPovider } from './src/services/favorites/favourites.context';
import { Navigation } from './src/infrastructure/navigation/index';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCrUmuF34cniTi5JP_wCquIigs3BlV-wVA",
  authDomain: "mealtogo-6e37c.firebaseapp.com",
  projectId: "mealtogo-6e37c",
  storageBucket: "mealtogo-6e37c.appspot.com",
  messagingSenderId: "646700827190",
  appId: "1:646700827190:web:e65ceccb5af1b3890f4e97"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <AuthenticationContextProvider>
          <FavouritesContextPovider>
            <LocationContextProvider >
            <RestaurantContextProvider >
              <Navigation />
            </RestaurantContextProvider>
            </LocationContextProvider>
            </FavouritesContextPovider>
        </AuthenticationContextProvider>
      </ThemeProvider> 
      <ExpoStatusBar style="auto" />
    </>
  );
}



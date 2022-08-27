/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantScreen from './src/component/features/restaurants/screens/restaurant.screen';

export default function App() {
  const [search, setSearch] = useState('');

const searchHandler = text => setSearch(text);
  return (
    <>
      <SafeAreaView style={ styles.container }>
        <View style={ styles.search }>
          <Searchbar
          style={ styles.searchbar }
          placeholder= "Search"
          onChangeText= { searchHandler }
          value={ search }
          elevation={ 4 }
          />
        </View>
        <RestaurantScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 15,
  },
});

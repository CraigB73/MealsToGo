import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarWrapper}>
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  searchbarWrapper:{
   
  },
  searchbar: {
    width: '75%',
  },
  
});

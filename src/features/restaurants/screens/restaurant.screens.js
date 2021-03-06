import React, {useContext, useState} from 'react';
import { View, FlatList, Pressable} from 'react-native';
import styled from 'styled-components';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favorites/favourites.context';


import { Search } from '../components/search.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { TouchableOpacity } from 'react-native';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.components';






// fix the background-color to dynamically add bottom padding on last card



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%; 
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
export const RestaurantScreen = ({ navigation  }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);


  return (
   
    <SafeArea>
      {isLoading && (
      <LoadingContainer >
        <Loading
          size={50}
          animating={true}
          color={Colors.blue400} 
          />
        </LoadingContainer>
      )}
      
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => { setIsToggled(!isToggled) }}
      />
      {isToggled && <FavouritesBar favorites={favourites} onNavigate={navigation.navigate} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() =>
            navigation.navigate("RestaurantDetail", {
              restaurant: item,
                })
              }
            >
              <Spacer position='bottom' size='2'>
                 <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      </SafeArea>
   

  );
}
// const styles = StyleSheet.create({
// });
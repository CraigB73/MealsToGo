
import React from 'react'
import { ScrollView, TouchableOpacity  } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../resturant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';


const FavouritesWrapper = styled.View`
  margin-left: 20px;
`;

export const FavouritesBar = ({ favorites, onNavigate }) => {
 
  return (
    <FavouritesWrapper>
      <Spacer varitiant='left.large'>
        <Text varitiant='caption'>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position='left' size={2}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          )
        })}
      </ScrollView>

    </FavouritesWrapper>
      
   
  )
};


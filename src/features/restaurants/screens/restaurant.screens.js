import React, {useContext} from 'react';
import { View, FlatList, Pressable} from 'react-native';
import styled from 'styled-components';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantContext } from '../../../services/restaurants.context';

import { Search } from '../components/search.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { TouchableOpacity } from 'react-native-gesture-handler';






// fix the background-color to dynamically add bottom padding on last card



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 3,
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
export const RestaurantScreen = ({ navigation }) => {


  const { isLoading, restaurants } = useContext(RestaurantContext);

  return (
    <>
      <SafeArea >
        {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={Colors.blue400} 
            />
          </LoadingContainer>
        )}
      
         <Search/>
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
    </>

  );
}
// const styles = StyleSheet.create({
// });
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';


import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';


export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon color='tan' icon='bread-slice' /> }
          onPress = {() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Bacon & Eggs'/>
          <List.Item title='Pancakes'/>
          <List.Item title='Omelette w/ toast '/>
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon color='tan' icon='hamburger' />}
          expanded ={lunchExpanded}
          onPress = {() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Hamburger w/ Fries'/>
          <List.Item title='Club Sandwich w/ chips'/>
          <List.Item title='Soup of the Day'/>
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon color='tan' icon='food-variant' />}
          expanded ={dinnerExpanded}
          onPress = {() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Steak w/ Veggies'/>
          <List.Item title='Fish and Rice'/>
          <List.Item title='Chicken and Potatoes'/>
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon color='tan' icon='cup' />}
          expanded ={drinksExpanded}
          onPress = {() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Soda'/>
          <List.Item title='Wine'/>
          <List.Item title='Beer'/>
        </List.Accordion>

      </ScrollView>
    </SafeArea>
  );
}
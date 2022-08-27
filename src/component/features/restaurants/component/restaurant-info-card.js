import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantInfoCard = ( ) => {
    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle"  />
            <Card.Cover source={{uri: 'null'}}/>
        </Card>
    )
}
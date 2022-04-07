import React, { createContext, useState } from 'react'
import { RestaurantCard } from '../../features/restaurants/components/restaurant-info-card.styles';



export const FavouritesContext = createContext();

export const FavouritesContextPovider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
  };
  
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
        }}
      >
       {children}
    </FavouritesContext.Provider>
  )
}
import React, {useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
 
    padding: ${(props) => props.theme.space[2]}
`;

export const Search = ({isFavouritesToggled, onFavouritesToggled}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])
  return (
    <SearchContainer >
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={ onFavouritesToggled }
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>  
  )
}

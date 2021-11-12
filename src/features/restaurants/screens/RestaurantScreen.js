/** @format */

import React from "react";
import styled from "styled-components/native";
import { View, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/Restaurant-Info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${Platform.OS === "android"
    ? `margin-top : ${StatusBar.currentHeight}px`
    : null}
`;

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;

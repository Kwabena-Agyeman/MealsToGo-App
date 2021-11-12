/** @format */

import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.Container}>
      <Card.Cover source={{ uri: `${photos[0]}` }} style={styles.CardImage} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
  },

  CardImage: {
    padding: 20,
    backgroundColor: "white",
  },
});

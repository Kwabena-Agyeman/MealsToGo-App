/** @format */

import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import Rating from "../../../components/rating/Rating-component";
import isOpen from "../../../components/isOpen";
import { SvgXml } from "react-native-svg";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: `${photos[0]}` }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating rating={rating} />
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <SvgXml xml={isOpen} width={25} height={25} />}
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={{
                uri: `${icon}`,
              }}
            />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

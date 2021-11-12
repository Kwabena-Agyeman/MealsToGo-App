/** @format */

import React from "react";

import { AirbnbRating } from "react-native-ratings";

const Rating = ({ rating }) => {
  return (
    <AirbnbRating
      ratingContainerStyle={{
        backgroundColor: "transparent",
        alignItems: "flex-start",
      }}
      count={5}
      defaultRating={rating}
      size={10}
      showRating={false}
      isDisabled={true}
      selectedColor={"#ffd700"}
    />
  );
};

export default Rating;

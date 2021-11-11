/** @format */

import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    backgroundColor: "blue",
    padding: 20,
    flex: 1,
  },
});

export default RestaurantScreen;

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import pluralize from "pluralize";
import Button from "./Button";
import { gray, green, white } from "../utils/colors";

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name")
  });

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Deck;

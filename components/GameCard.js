import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";
import { blue, white, yellow } from "../utils/colors";

class GameCard extends Component {
  state = {
    showAsk: true
  };

  toggleAsk = () => {
    this.setState(state => ({
      showAsk: !state.showAsk
    }));
  };

  render() {
    const { showAsk } = this.state;
    const { card } = this.props;

    return (
      <View style={StyleSheet.container}>
        <View>
          {showAsk ? (
            <Text style={styles.text}> {card.ask} </Text>
          ) : (
            <Text style={styles.text}> {card.answer} </Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <Button style={{ backgroundColor: blue }} onPress={this.toggleAsk}>
            {`See the ${showAsk ? "Answer" : "Ask"}`}
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: yellow,
    padding: 30,
    width: 350,
    height: 250,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 4,
      height: 5
    }
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: white
  }
});

export default GameCard;

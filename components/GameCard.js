import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";
import { white } from "../utils/colors";

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

    return (
      <View style={styles.container}>
        <View>
          {showAsk ? (
            <Text style={styles.text}> {this.props.card.ask} </Text>
          ) : (
            <Text style={styles.text}>   {this.props.card.answer} </Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <Button style={styles.btn} onPress={this.toggleAsk}>
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
    backgroundColor: "#009faf",
    margin: 5,
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
  },
  btn: {
    backgroundColor: "#1976d2",
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});

export default GameCard;

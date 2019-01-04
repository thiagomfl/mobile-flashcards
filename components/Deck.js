import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import pluralize from "pluralize";
import Button from "./Button";
import { gray, green, white } from "../utils/colors";
import { connect } from "react-redux";

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name")
  });

  render() {
    const { navigation, deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{deck.name}</Text>
          <Text style={styles.count}>{`${deck.cards.length} ${pluralize(
            "card",
            deck.cards.length
          )}`}</Text>
        </View>
        <View style={styles.actions}>
          {deck.cards.length !== 0 && (
            <Button
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Game", { deck });
              }}
            >
              <Text>Start Quiz</Text>
            </Button>
          )}
          <Button
            style={[{ backgroundColor: deck.cards.length !== 0 ? gray : green }, styles.btn]}
            onPress={() => {
              navigation.navigate("AddCard", { deckId: deck.id });
            }}
          >
            <Text>Add Card</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    color: gray,
    textAlign: "center",
    marginBottom: 5
  },
  actions: {
    marginTop: 20
  },
  btn: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.getParam("deckId")]
});

export default connect(
  mapStateToProps,
  null
)(Deck);

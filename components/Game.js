import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { gray, white } from "../utils/colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import pluralize from "pluralize";
import GameCard from "./GameCard";
import GameActions from "./GameActions";
import GameResults from "./GameResults";

const defaultState = {
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  currentAskIndex: 0,
  showResults: false
};

class Game extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").name} Quiz`
  });

  state = defaultState;

  getRemainingCountMessage = () => {
    const { correctAnswerCount, incorrectAnswerCount } = this.state;

    const remainingAsks =
      this.getDeck().cards.length -
      (correctAnswerCount + incorrectAnswerCount + 1);

    return `${remainingAsks} ${pluralize("ask", remainingAsks)} remainings.`;
  };

  getDeck = () => {
    return this.props.navigation.getParam("deck");
  };

  restartGame = () => {
    this.setState(defaultState);
  };

  recordAnswer = knewAnswer => {
    let {
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentAskIndex
    } = this.state;

    if (knewAnswer) {
      correctAnswerCount++;
    } else {
      incorrectAnswerCount++;
    }

    const deck = this.getDeck();

    if (currentAskIndex === this.getDecks.cards.length - 1) {
      showResults = true;

      clearLocalNotification();
      setLocalNotification();
    } else {
      currentAskIndex++;
    }

    this.setState(state => ({
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentAskIndex
    }));
  };

  render() {
    const {
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentAskIndex
    } = this.state;

    return !showResults ? (
      <View style={styles.container}>
        <GameCard card={this.getDeck().cards[currentAskIndex]} />
        <Text style={styles.count}> {this.getRemainingCountMessage()} </Text>
        <GameActions recordAnswer={this.recordAnswer} />
      </View>
    ) : (
      <GameResults
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        restartGame={this.restartGame}
        navigation={this.props.navigation}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    padding: 0
  },
  count: {
    color: gray,
    fontSize: 20,
    marginTop: 10
  }
})

export default Game;

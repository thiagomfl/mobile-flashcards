import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import { gray, blue, white } from "../utils/colors";

const GameResults = ({
  correctAnswerCount,
  incorrectAnswerCount,
  restartGame,
  navigation
}) => (
  <View style={styles.container}>
    <Text style={styles.header}> Your Score was </Text>
    <Text style={styles.result}>{`${Math.round(
      (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
    )} %`}</Text>
    <View style={styles.actions}>
      <Button 
        style={styles.btn}
        onPress={() => restartGame()}>Restart Quiz</Button>
      <Button
        onPress={() => navigation.goBack()}
          style={[{ backgroundColor: gray }, styles.btn ]}
      >
        Go Back to Deck
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  result: {
    fontSize: 70,
    color: blue,
    textAlign: "center"
  },
  actions: {
    marginTop: 50
  },
  btn: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});

export default GameResults;

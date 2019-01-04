import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { green, red, white } from "../utils/colors";

const GameActions = ({ recordAnswer }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Your answer was?</Text>
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.answerBtn, { backgroundColor: green }]}
        onPress={() => recordAnswer(true)}
      >
        <Text style={styles.btnText}>Correct</Text>
      </TouchableOpacity>
      <Text>OR</Text>
      <TouchableOpacity
        style={[styles.answerBtn, { backgroundColor: red }]}
        onPress={() => recordAnswer(false)}
      >
        <Text style={styles.btnText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  answerBtn: {
    padding: 20,
    margin: 5,
    width: 150,
    borderRadius: 5
  },
  btnText: {
    color: white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default GameActions;

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import Button from "./Button";
import { saveCard } from "../utils/api";

class AddCard extends Component {
  static navigationOptions = () => ({
    title: "Add Card"
  });

  state = {
    ask: "",
    answer: ""
  };

  handleSubmit = () => {
    deckId = this.props.navigation.getParams("deckId");

    const { question, answer } = this.state;

    // action do redux => this.props.createCard(deckId, question, answer);
    saveCard(deckId, { question, answer });

    this.props.navigation.goBack();

    this.setState({
      ask: "",
      answer: ""
    });
  };

  render() {
    const { ask, answer } = this.state;

    return (
      <KeyboardAvoidingView bahavior="padding" style={styles.container}>
        <View style={styles.element}>
          <Text style={styles.label}> What would you ask? </Text>
          <TextInput
            style={styles.input}
            value={ask}
            placeholder="e.g. What's the color of money?"
            onChangeText={ask => this.setState({ ask })}
          />
        </View>
        <View style={styles.element}>
          <Text style={styles.label}>What is the answer</Text>
          <TextInput
            style={styles.input}
            value={answer}
            placeholder="e.g. Green"
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <Button onPress={this.handleSubmit}>
          <Text>Create Card</Text>
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  element: {
    margin: 20
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20
  }
});

//mapDispatchToProps

export default AddCard;

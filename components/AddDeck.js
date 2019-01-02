import React, { Component } from "react";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import Button from "./Button";
import { saveDeck } from "../utils/api";
import { generatedId } from "../utils/helpers";
import { gray, white } from "../utils/colors";
import { connect } from "react-redux";
import { createDeck } from "../actions/deckActions";

class AddDeck extends Component {
  state = {
    input: ""
  };

  createDeckObject = () => ({
    id: generatedId(),
    name: this.state.input,
    cards: []
  });

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {
    deck = this.createDeckObject();

    this.props.createDeck(deck.id, deck.name);
    saveDeck(deck);

    this.props.navigation.navigate("Deck", {
      deckId: deck.id,
      name: deck.name
    });

    this.setState(() => ({
      input: ""
    }));
  };

  render() {
    const { input } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={Styles.label}> What is the main focus of the deck? </Text>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="e.g. Programming"
          onChangeText={this.handleInputChange}
        />
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

const mapDispatchToProps = dispatch => ({
  createDeck: (id, deckName) => dispatch(createDeck(id, deckName))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);

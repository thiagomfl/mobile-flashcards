import React, { Component } from "react";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import Button from "./Button";
import { saveDeck } from "../utils/api";
import { generateID } from "../utils/helpers";
import { gray, lightcyan } from "../utils/colors";
import { connect } from "react-redux";
import { createDeck } from "../actions";

class AddDeck extends Component {
  state = {
    input: ""
  };

  _createDeckObject = () => ({
    id: generateID(),
    name: this.state.input,
    cards: []
  })

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {
    deck = this._createDeckObject();
    
    this.props.createDeck(deck.id, deck.name); 

    saveDeck(deck); 

    this.props.navigation.navigate("Deck", {
      deckId: deck.id,
      DeckName: deck.name
    });

    this.setState(() => ({
      input: ""
    }));
  };

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>What will be your challenge in this deck?</Text>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="e.g. Programming"
          onChangeText={this.handleInputChange}
        />
        <Button style={styles.btn} onPress={this.handleSubmit}>
          <Text>Create Deck</Text>
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
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    backgroundColor: lightcyan,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20
  },
  btn: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});

const mapDispatchToProps = dispatch => ({
  createDeck: (id, deckName) => dispatch(createDeck(id, deckName))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);


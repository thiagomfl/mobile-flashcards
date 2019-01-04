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
import { connect } from "react-redux";
import { createCard } from "../actions";
import { lightcyan, gray } from "../utils/colors";

class AddCard extends Component {
  static navigationOptions = () => ({
    title: "Add Card"
  });

  state = {
    ask: "",
    answer: ""
  };

  handleSubmit = () => {
    deckId = this.props.navigation.getParam("deckId");

    const { ask, answer } = this.state;

    this.props.createCard(deckId, ask, answer);
    saveCard(deckId, { ask, answer });

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
          <Text style={styles.label}> What is the Question? </Text>
          <TextInput
            style={styles.input}
            value={ask}
            placeholder="e.g. What's the best programming language?"
            onChangeText={ask => this.setState({ ask })}
          />
        </View>
        <View style={styles.element}>
          <Text style={styles.label}>What is the Answer</Text>
          <TextInput
            style={styles.input}
            value={answer}
            placeholder="e.g. Javascript"
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <Button style={styles.btn} onPress={this.handleSubmit}>
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
    backgroundColor: lightcyan,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
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
  createCard: (deckId, ask, answer) => dispatch(createCard(deckId, ask, answer))
});

export default connect(
  null,
  mapDispatchToProps
)(AddCard);

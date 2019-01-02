import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import DeckSummaryCard from "./DeckSummaryCard";
import Button from "./Button";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions/deckActions";
import { white } from "../utils/colors";

class DeckList extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    getDecks()
      .then(decks => this.props.getDecks(decks))
      .then(() => {
        this.setState({ ready: true });
      });
  }

  render() {
    const { decks, navigation } = this.props;

    if (!this.state.ready) {
      return (
        <View style={styles.blank}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={Object.values(decks)}
            renderItem={({ item }) => (
              <DeckSummaryCard
                id={item.id}
                name={item.name}
                cardCount={item.cards.length}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item, index) => item.name}
          />
        </View>
      ) : (
        <View style={styles.blank}>
          <Text style={{ fontSize: 18 }}>You don't have decks</Text>
          <Button
            onPress={() => {
              navigation.navigate("AddDeck");
            }}
          >
            {" "}
            Create Deck{" "}
          </Button>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  blank: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = decks => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  receiveDecks: decks => dispatch(receiveDecks(decks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

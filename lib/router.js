import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import DeckList from "../components/DeckList";
import AddDeck from "../components/AddDeck";
import AddCard from "../components/AddCard";
import Deck from "../components/Deck";
import Game from "../components/Game";
import { Feather } from "@expo/vector-icons";
import { white, blue, cyan } from "../utils/colors";

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "List of Decks",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: cyan,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: Tabs,
    Deck: Deck,
    AddCard: AddCard,
    Game: Game
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: cyan },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

export default AppNavigator;

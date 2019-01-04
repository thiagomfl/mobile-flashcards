import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Constants } from "expo";
import { cyan, white } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";
import reducer from "./reducers";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./lib/router";

const FlashcardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={cyan}
            barStyle="light-content"
          />
          <Text style={styles.header}>FlashCards</Text>
          
          <AppIndex />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 15,
    backgroundColor: cyan,
    fontSize: 28,
    color: white
  }
});

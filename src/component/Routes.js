import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import Login from "./Login";
import Start from "./Start";
import Signup from "./Signup";
import NoteList from "./NoteList";
import Note from "./Note";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="Start"
            component={Start}
            hideNavBar
            initial={this.state.isLogged}
          />
          <Scene
            key="Login"
            tabBarStyle={{ backgroundColor: "#4169E1" }}
            component={Login}
            hideNavBar
            direction="vertical"
            initial={this.state.isLogged}
          />
          <Scene
            key="Signup"
            tabBarStyle={{ backgroundColor: "#4169E1" }}
            component={Signup}
            hideNavBar
            direction="vertical"
            initial={this.state.isLogged}
          />
          <Scene
            key="NoteList"
            tabBarStyle={{ backgroundColor: "#4169E1" }}
            component={NoteList}
            hideNavBar
            direction="vertical"
            initial={this.state.isLogged}
          />
          <Scene
            key="Note"
            tabBarStyle={{ backgroundColor: "#4169E1" }}
            component={Note}
            hideNavBar
            direction="vertical"
            initial={this.state.isLogged}
          />
        </Stack>
      </Router>
    );
  }
}
const styles = StyleSheet.create({});

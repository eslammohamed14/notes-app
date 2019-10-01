/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import NoteCard from "./NoteCard";
import DB from "./../DB";
import * as LocalStorage from "./../LocalStorage";

// const data = [
//   { id: 1, title: "title", content: "hello from my first app" },
//   { id: 2, title: "title", content: "hello from my first app" },
//   { id: 3, title: "title", content: "hello from my first app" },
//   { id: 4, title: "title", content: "hello from my first app" }
// ];
export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let db = new DB();

    LocalStorage.getData("user_id").then(value => {
      db.getNotes(value).then(data => {
        console.log(data);
        this.setState({ data });
      });
    });
  }
  componentWillReceiveProps(nextProps) {
    let temp = this.state.data;
    temp.push({
      id: nextProps.docID,
      title: nextProps.title,
      content: nextProps.content
    });
    this.setState({
      data: temp
    });
  }
  renderNotes(data) {
    return data.map((obj, i) => {
      return (
        <NoteCard
          key={i}
          title={obj.title}
          content={obj.content}
          onDelete={() => this.deleteNote(obj.docID)}
        />
      );
    });
  }
  deleteNote(id) {
    console.log("====================================");
    console.log(id);
    console.log("====================================");
    let temp = this.state.data;
    let index = temp.findIndex(obj => obj.docID == id);
    temp.splice(index, 1);
    this.setState({
      data: temp
    });

    let db = new DB();

    db.deleteNote(id).then(data => {
      console.log("DELETED");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0071CD" barStyle="light-content" />

        <ScrollView>
          <View style={styles.Head}>
            <Text style={styles.HeadTxt}>Notes</Text>
            <Icon
              name="ios-search"
              size={30}
              style={styles.icon_S}
              onPress={() => alert("search")}
            />
          </View>
          {this.renderNotes(this.state.data)}
        </ScrollView>
        <View style={styles.icon}>
          <Icon
            name="ios-add-circle"
            size={60}
            style={{ color: "#007EE5", position: "absolute", bottom: 0 }}
            onPress={() => Actions.Note()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6E4EE"
  },
  Head: {
    flexDirection: "row",
    backgroundColor: "#007EE5",
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: "space-between"
  },
  icon_S: {
    color: "white",
    marginRight: 25
  },
  HeadTxt: {
    fontSize: 25,
    color: "white",
    paddingLeft: 15
  },
  start: {
    backgroundColor: "#4169E1",
    marginTop: 250,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  textBotton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  icon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginRight: 10
    // height: '100%',
  }
});

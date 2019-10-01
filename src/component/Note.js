/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import IconEnt from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Actions } from "react-native-router-flux";
import DB from "./../DB";
import * as LocalStorage from "./../LocalStorage";

export default class Note extends Component {
  state = { title: "", content: "" };

  validNote() {
    if (this.state.title == "" || this.state.content == "") {
      alert("enter ay 7aga");
    } else {
      let data = {
        title: this.state.title,
        content: this.state.content
      };

      let db = new DB();

      LocalStorage.getData("user_id").then(user_id => {
        db.saveNote(user_id, this.state.title, this.state.content).then(
          document_id => {
            Actions.replace("NoteList", {
              docID: document_id,
              title: this.state.title,
              content: this.state.content
            });
          }
        );
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Head}>
          <StatusBar backgroundColor="#0071CD" barStyle="light-content" />
          <Text style={styles.HeadTxt}>Editor</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.Save}
            title="Save"
            onPress={() => this.validNote()}
          >
            <Icon name="save" size={20} style={styles.icon} />
            <Text style={styles.textBotton}>SAVE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Past} title="Past">
            <Icon name="content-paste" size={20} style={styles.icon} />
            <Text style={styles.textBotton}>PASTE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <TextInput
            style={styles.title}
            placeholder="Note title"
            value={this.state.title}
            onChangeText={text =>
              this.setState({
                title: text
              })
            }
          />
          <Text style={styles.line}>
            {" "}
            ----------------------------------------------------------------
          </Text>
          <TextInput
            style={styles.content}
            placeholder="Content"
            multiline={true}
            value={this.state.content}
            onChangeText={text =>
              this.setState({
                content: text
              })
            }
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
    backgroundColor: "#007EE5",
    paddingTop: 25,
    paddingBottom: 25
  },
  HeadTxt: {
    fontSize: 25,
    color: "white",
    paddingLeft: 15
  },
  row: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-around",
    width: "95%",
    alignSelf: "center"
  },
  Save: {
    flexDirection: "row",
    paddingHorizontal: 60,
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    elevation: 2
  },
  Past: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "#E6EEF4",
    width: "35%",
    elevation: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  textBotton: {
    color: "#808080",
    fontSize: 15,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  text: {
    backgroundColor: "#FFFFFF",
    alignSelf: "stretch",
    alignItems: "stretch",
    paddingVertical: 0,
    paddingHorizontal: 15,
    height: 400,
    maxWidth: "100%",
    marginLeft: 5,
    marginRight: 5
  },
  line: {
    color: "#DCDCDC",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "400"
  },
  content: {
    fontSize: 20,
    color: "black",
    fontWeight: "400"
  },
  icon: {}
});

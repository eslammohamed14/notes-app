import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";

export default class NoteList extends Component {
  state = {
    showOptions: false
  };
  toggleOptions() {
    this.setState({
      showOptions: !this.state.showOptions
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.txt_title}>{this.props.title}</Text>
          <Icon
            name="options-vertical"
            style={{ padding: 10, margin: -10 }}
            size={15}
            onPress={() => this.toggleOptions()}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.txt_content}>{this.props.content}</Text>
        </View>

        <View
          style={[
            styles.op,
            {
              display: this.state.showOptions ? "flex" : "none",
              position: this.state.showOptions ? "absolute" : "relative"
            }
          ]}
        >
          <Icon2
            name="delete"
            style={styles.option}
            size={25}
            onPress={() => {
              this.props.onDelete(this.props.docID);
              this.toggleOptions();
            }}
          />
          <Icon3 style={styles.option} name="mode-edit" size={25} />
          <Icon2
            style={styles.option}
            name="close"
            size={25}
            onPress={() => this.toggleOptions()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 2,
    padding: 15,
    margin: 10
  },
  title: {
    color: "black",
    fontWeight: "400",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  content: {
    fontSize: 20,
    color: "black",
    fontWeight: "400"
  },
  txt_title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txt_content: {},
  op: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.9
  },
  option: {
    padding: 15
  }
});

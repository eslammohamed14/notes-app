/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar
} from "react-native";
import * as firebase from "firebase";
import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  signUpUser(email, password) {
    if (this.validateEmail(email) && this.validatePassword(password)) {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      Actions.Login();
    } else {
      alert("Invalid data");
    }
  }
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }
  validatePassword(password) {
    return password.length >= 8;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./image.png")} style={styles.img} />
        <StatusBar backgroundColor="#0071CD" barStyle="light-content" />
        <ScrollView style={{ width: "100%" }}>
          <Text style={styles.signin}>SIGN UP</Text>

          <View style={styles.input_con}>
            <TextInput
              style={styles.inputP}
              placeholder="email@gmail.com"
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              style={styles.inputP}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableOpacity
            style={styles.signup}
            title="signup"
            onPress={() => {
              this.signUpUser(this.state.email, this.state.password);
            }}
          >
            <Text style={styles.textBotton}>sign up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007EE5",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  signin: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 50
  },
  input_con: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20
  },
  inputP: {
    backgroundColor: "white",
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  signup: {
    backgroundColor: "white",
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  textBotton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black"
  }
});

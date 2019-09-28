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
import { Actions } from "react-native-router-flux";
import image2 from "./image.png";
import * as firebase from "firebase";
import * as LocalStorage from "./../LocalStorage";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loader: false
    };
  }

  async loginUser(email, password) {
    // this.setState({ loader: true });
    console.log(firebase);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        user.getToken().then(function(token) {
          $rootScope.userLoginToken = token;
          console.log(token);
        });
        LocalStorage.storeData("user_id", user.user.uid).then(() => {
          console.log(user);
          // this.setState({ loader: false });
        });

        // Actions.NoteList();
      })
      .catch(e => {
        // this.setState({ loader: false });
        alert(e.message);
      });
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
        <View
          style={[
            styles.loader,
            {
              display: this.state.loader ? "flex" : "none",
              position: this.state.loader ? "absolute" : "relative"
            }
          ]}
        >
          <Text style={styles.loaderText}>Loading...</Text>
        </View>

        <Image source={image2} style={styles.img} />
        <StatusBar backgroundColor="#0071CD" barStyle="light-content" />
        <ScrollView style={{ width: "100%", padding: 20 }}>
          <View>
            <TextInput
              style={styles.inputE}
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

          <Text style={styles.forget}>forget your password ?</Text>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.login}
              title="Login"
              onPress={() => {
                this.loginUser(this.state.email, this.state.password);
              }}
            >
              <Text style={styles.textBotton}>Login</Text>
            </TouchableOpacity>
            <Text>
              -----------------------------------------------------------
            </Text>
            <TouchableOpacity
              style={styles.signup}
              title="Signup"
              onPress={() => Actions.Signup()}
            >
              <Text style={styles.textBotton}>sign up</Text>
            </TouchableOpacity>
          </View>
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
  loader: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10
  },
  loaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
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
    marginTop: 30
  },

  inputE: {
    backgroundColor: "white",
    marginTop: 150,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  inputP: {
    backgroundColor: "white",
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  forget: {
    fontSize: 20,
    color: "white",
    alignItems: "center",
    marginTop: 10
  },
  login: {
    backgroundColor: "white",
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 50,
    width: "75%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  signup: {
    backgroundColor: "white",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 50,
    width: "75%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  textBotton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black"
  }
});

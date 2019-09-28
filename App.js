import React, { Component } from "react";

import Routes from "./src/component/Routes";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAXS0O1xQxLyEq7qpoKJ0nhNHAczjFhp7g",
  authDomain: "notes-react-firebase.firebaseapp.com",
  databaseURL: "https://notes-react-firebase.firebaseio.com",
  projectId: "notes-react-firebase",
  storageBucket: "",
  messagingSenderId: "1036816856185",
  appId: "1:1036816856185:web:6588d9409ecf110e9050a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return <Routes />;
  }
}

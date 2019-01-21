import React, { Component } from 'react';
import * as firebase from "firebase";
import Settings from "./components/Header/Settings";
import NoteList from "./components/NoteList/NoteList";
import NoteContent from "./components/NoteContent/NoteContent";

var config = {
  apiKey: "AIzaSyBXTytxJR6xYO_TV_Ckkh7N135EBD9lo48",
  authDomain: "notetaker-59b79.firebaseapp.com",
  databaseURL: "https://notetaker-59b79.firebaseio.com",
  projectId: "notetaker-59b79",
  storageBucket: "notetaker-59b79.appspot.com",
  messagingSenderId: "115735111345"
};

firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeNote: ""
    }
  }
  render() {
    return (
      <div className="row app">
        <div>
          <NoteList firebase={firebase}/>
          <NoteContent />
        </div>
      </div>
    );
  }
}

export default App;

import * as firebase from "firebase";
import "firebase/firestore";

export default class DB {
  constructor() {
    this.db = firebase.firestore();
    // this.db.settings({ timestampsInSnapshots: true });
  }

  getNotes(user_id) {
    let notes = [];

    return new Promise((resolve, reject) => {
      this.db
        .collection("notes")
        .where("user_id", "==", user_id)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No matching documents.");
            return;
          }

          notes = snapshot.docs.map(doc => {
            let docID = doc.id;
            let docData = doc.data();
            return { docID, ...docData };
          });
          resolve(notes);
        });
    });
  }

  saveNote(user_id, title, content) {
    return new Promise((resolve, reject) => {
      this.db
        .collection("notes")
        .add({
          user_id,
          title,
          content
        })
        .then(ref => {
          console.log("Added document with ID: ", ref.id);
          resolve(ref.id);
        });
    });
  }

  deleteNote(docID) {
    return new Promise((resolve, reject) => {
      this.db
        .collection("notes")
        .doc(docID)
        .delete()
        .then(() => {
          resolve(true);
        });
    });
  }
}

import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHBYcG9zlIMR4rusCsGGVzG1QjUnEgBTQ",
    authDomain: "bytheway-may.firebaseapp.com",
    databaseURL: "https://bytheway-may.firebaseio.com",
    projectId: "bytheway-may",
    storageBucket: "bytheway-may.appspot.com",
    messagingSenderId: "444625286662"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp;

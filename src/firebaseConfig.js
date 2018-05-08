import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB-tdAFzm-YQRFlLFLJIAvfN60vBKqu5Kk",
    authDomain: "pizza-planet-77d2f.firebaseapp.com",
    databaseURL: "https://pizza-planet-77d2f.firebaseio.com",
    projectId: "pizza-planet-77d2f",
    storageBucket: "pizza-planet-77d2f.appspot.com",
    messagingSenderId: "929682525008"
  };
 const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');

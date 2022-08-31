import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOtPOr1vKHP50cN_Uhkm00Xyc6jQsNYAc",
    authDomain: "chatroom-1d6a1.firebaseapp.com",
    projectId: "chatroom-1d6a1",
    storageBucket: "chatroom-1d6a1.appspot.com",
    messagingSenderId: "446294183778",
    appId: "1:446294183778:web:8f06d3fd809eadccb6263b",
    measurementId: "G-Y19C2F3VHT"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFireStore = firebase.firestore()
  const timestamp = firebase.firestore.FildValue.serverTimestamp

  export {projectAuth, projectFireStore, timestamp}
import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDA6GYJoi1JQW_yNtkTZqXwfjD74GWLnxg",
  authDomain: "chitter-chatter-001.firebaseapp.com",
  projectId: "chitter-chatter-001",
  storageBucket: "chitter-chatter-001.appspot.com",
  messagingSenderId: "1051139213665",
  appId: "1:1051139213665:web:f5587bed7bbf3493a91d20"
}).auth();


import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv33q30MQRyNCj1du8K_TW4EZjXllUDkA",
  authDomain: "money-75de0.firebaseapp.com",
  projectId: "money-75de0",
  storageBucket: "money-75de0.appspot.com",
  messagingSenderId: "216500809871",
  appId: "1:216500809871:web:31ee0901bd65148ff5c0fa",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app, {
  persistence: browserLocalPersistence,
});

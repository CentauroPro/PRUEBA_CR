// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCzPKbogQ4rrAX4q5-cLlfltg2N-rWBPaA",
  authDomain: "prueba-cr-bb9e0.firebaseapp.com",
  databaseURL: "https://prueba-cr-bb9e0-default-rtdb.firebaseio.com",
  projectId: "prueba-cr-bb9e0",
  storageBucket: "prueba-cr-bb9e0.appspot.com",
  messagingSenderId: "904951202377",
  appId: "1:904951202377:web:057bd5ad9dc70b75d3b598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)
export const auth = initializeAuth(app, {
persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
 // export const storage=getStorage(app)
  export const db = getDatabase(app);
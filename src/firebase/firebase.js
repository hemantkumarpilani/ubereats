import firebaseapp from '@react-native-firebase/app'
import firebasestore from '@react-native-firebase/firestore'
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_G1capJUrTMVFyF5lCdKfA99e7E2fUuQ",
    authDomain: "uber-eats-36895.firebaseapp.com",
    projectId: "uber-eats-36895",
    storageBucket: "uber-eats-36895.appspot.com",
    messagingSenderId: "966884101091",
    appId: "1:966884101091:web:f2f1fa7b7661ea6a1f2ed6"
  };

// !firebaseapp.apps.length ? firebaseapp.initializeApp(firebaseConfig) : firebaseapp.app()

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {app, db, getFirestore, collection, addDoc}
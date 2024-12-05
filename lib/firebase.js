import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBLQWld-ARkm6J4sDvj-BGMLhJ8ALUv8Jo",
    authDomain: "react17-next12-firebase8.firebaseapp.com",
    projectId: "react17-next12-firebase8",
    storageBucket: "react17-next12-firebase8.firebasestorage.app",
    messagingSenderId: "665470382676",
    appId: "1:665470382676:web:fb2bee18c9bf58b40d73c1"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

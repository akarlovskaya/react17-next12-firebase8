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

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }
  
  /**`
   * Converts a firestore document to JSON
   * @param  {DocumentSnapshot} doc
   */
  export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      // Firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data.createdAt.toMillis(),
      updatedAt: data.updatedAt.toMillis(),
    };
  }

  // Converts a Firestore timestamp to a number
  export const fromMillis = firebase.firestore.Timestamp.fromMillis;
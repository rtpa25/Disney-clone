import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDigGT2vmV1WRNdrjAd3fjJ4s8_TVQNEFg",
  authDomain: "disney-clone-7719e.firebaseapp.com",
  projectId: "disney-clone-7719e",
  storageBucket: "disney-clone-7719e.appspot.com",
  messagingSenderId: "468124099675",
  appId: "1:468124099675:web:0150a150ac64919c50cb7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

import { initializeApp, firestore, auth, storage } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDigGT2vmV1WRNdrjAd3fjJ4s8_TVQNEFg",
  authDomain: "disney-clone-7719e.firebaseapp.com",
  projectId: "disney-clone-7719e",
  storageBucket: "disney-clone-7719e.appspot.com",
  messagingSenderId: "468124099675",
  appId: "1:468124099675:web:3f0dfb4920b50daa50cb7e",
};

const app = initializeApp(firebaseConfig);
const db = firestore();
const _auth = auth();
const provider = new _auth.GoogleAuthProvider();
const _storage = storage();

export { _auth, provider, _storage };
export default db;

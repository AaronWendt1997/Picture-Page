import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAh6rBosiCyh6AUt65TF81rt6FJvEfbcHI",
  authDomain: "picture-page-5492e.firebaseapp.com",
  projectId: "picture-page-5492e",
  storageBucket: "picture-page-5492e.appspot.com",
  messagingSenderId: "100187500380",
  appId: "1:100187500380:web:fd20146ec9d30c2fa29b99",
  measurementId: "G-0ZQM8KDBDG"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };

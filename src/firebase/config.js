import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxTTGf502cqL1guyf1sXygg7rNg2bZnwc",
  authDomain: "fanya-e62d1.firebaseapp.com",
  databaseURL: 'https://fanya-e62d1.firebaseio.com',
  projectId: "fanya-e62d1",
  storageBucket: "fanya-e62d1.appspot.com",
  messagingSenderId: "687415006528",
  appId: "1:687415006528:web:f682b18cd03cfb326fd6a5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
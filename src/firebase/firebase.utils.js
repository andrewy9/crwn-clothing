import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDvskAnEB1wMQXdJuKWW1Dj0ddDNEOWXiA",
  authDomain: "crwn-db-17deb.firebaseapp.com",
  projectId: "crwn-db-17deb",
  storageBucket: "crwn-db-17deb.appspot.com",
  messagingSenderId: "807252235207",
  appId: "1:807252235207:web:f08ee05123b7b0fd96bfe2",
  measurementId: "G-H8WFGP7H37"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
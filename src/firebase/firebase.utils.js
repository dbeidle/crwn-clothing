import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANpmKVzLz1bp7JJIPXBoIppuC5rxTjzLM",
    authDomain: "crwn-db-1527e.firebaseapp.com",
    databaseURL: "https://crwn-db-1527e.firebaseio.com",
    projectId: "crwn-db-1527e",
    storageBucket: "crwn-db-1527e.appspot.com",
    messagingSenderId: "812273335791",
    appId: "1:812273335791:web:76371505ef7a193fcc8a1a",
    measurementId: "G-HP72B9EBYS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

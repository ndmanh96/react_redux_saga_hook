import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBFJKY_aPSO1NZ7OpTniFrKdZO72cYb3no",
    authDomain: "react-application-ecommerce.firebaseapp.com",
    projectId: "react-application-ecommerce",
    storageBucket: "react-application-ecommerce.appspot.com",
    messagingSenderId: "582953229106",
    appId: "1:582953229106:web:988fb481a91724730a952b",
    measurementId: "G-MYM32YEHGB"
};
// sign up
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
} 

firebase.initializeApp(config);
//   submot collection to firebase
export const addCollectionAndItems = (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transform = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transform.reduce((accumalator, collection)=> {accumalator[collection.title.toLowerCase()] = collection; return accumalator},{})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubcribeFromAuth = auth.onAuthStateChanged(userAuth=>{
            unsubcribeFromAuth();
            resolve(userAuth);
        }, reject);
    });
}

//
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;



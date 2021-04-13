import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDnNsAHRkYz5NnXgwwvGoh_r_8SUTwbEUs",
    authDomain: "danielcastaneda-186df.firebaseapp.com",
    projectId: "danielcastaneda-186df",
    storageBucket: "danielcastaneda-186df.appspot.com",
    messagingSenderId: "42558715756",
    appId: "1:42558715756:web:f571b48d12844adcad6549"
});

export function getFirebase() {
    return app;
}


export function getFirestore() {
    return firebase.firestore(app);
}
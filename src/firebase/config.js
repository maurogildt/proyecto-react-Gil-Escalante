import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyACy-gsTNVbJvMuMHtq1zPfFpX0grhNB-0",
    authDomain: "react-proyecto-final-f1bc6.firebaseapp.com",
    projectId: "react-proyecto-final-f1bc6",
    storageBucket: "react-proyecto-final-f1bc6.appspot.com",
    messagingSenderId: "353612395369",
    appId: "1:353612395369:web:56d27448e1661af71283f8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
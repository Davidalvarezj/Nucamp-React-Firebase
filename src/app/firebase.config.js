// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDffSe83jxwsrx3yWdOInsz8Q8r41xML4w",
    authDomain: "nucamp-server-rn.firebaseapp.com",
    projectId: "nucamp-server-rn",
    storageBucket: "nucamp-server-rn.appspot.com",
    messagingSenderId: "292207261507",
    appId: "1:292207261507:web:40ea6f8850e3f5e01621f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

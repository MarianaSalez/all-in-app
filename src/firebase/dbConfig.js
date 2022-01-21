
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPlNyiunvT0BKYV4zGYN_OCMDLd3PZrvU",
  authDomain: "all-in-mariana-salez.firebaseapp.com",
  projectId: "all-in-mariana-salez",
  storageBucket: "all-in-mariana-salez.appspot.com",
  messagingSenderId: "559963213697",
  appId: "1:559963213697:web:85ebf50b008df2c7a3a280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}
    


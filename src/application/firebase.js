import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJeF_RRwwq3sGfPooHNF_WCESs7lUmBQI",
    authDomain: "pizzaproyecto-f4abc.firebaseapp.com",
    projectId: "pizzaproyecto-f4abc",
    storageBucket: "pizzaproyecto-f4abc.appspot.com",
    messagingSenderId: "815884131156",
    appId: "1:815884131156:web:fd803ee7d7c7c5bef746c1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
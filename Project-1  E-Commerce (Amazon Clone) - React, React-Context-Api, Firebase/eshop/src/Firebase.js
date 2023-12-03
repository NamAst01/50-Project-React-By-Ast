import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkJxiIkDV8WojBLaK_tb0zER-rUQdyGoM",
  authDomain: "eshop-fe8b6.firebaseapp.com",
  projectId: "eshop-fe8b6",
  storageBucket: "eshop-fe8b6.appspot.com",
  messagingSenderId: "129837640768",
  appId: "1:129837640768:web:d1d80ef957a481d304c3a5",
  measurementId: "G-5314SFTTCN",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

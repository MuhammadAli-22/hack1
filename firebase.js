  // Import the functions you need from the SDKs you need

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  import { getFirestore} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAvemFoi7IrVEqf9PGO2NMqNNHSHapsCFc",
    authDomain: "hack1-37121.firebaseapp.com",
    projectId: "hack1-37121",
    storageBucket: "hack1-37121.appspot.com",
    messagingSenderId: "709650767822",
    appId: "1:709650767822:web:60e262d2c1e6cf332dd59f",
    measurementId: "G-CBJNKYPXPQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);




    // Initialize Firebase Authentication and Firestore
  
  export { auth, db };

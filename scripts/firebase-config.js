
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8fb291_opvPWggLuez4GiTkeyigtGxjw",
    authDomain: "tic-tac-toe-a08ea.firebaseapp.com",
    projectId: "tic-tac-toe-a08ea",
    storageBucket: "tic-tac-toe-a08ea.appspot.com",
    messagingSenderId: "1068422572291",
    appId: "1:1068422572291:web:daa3d81586b9cea3102136",
    measurementId: "G-SHTWD9P67D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);
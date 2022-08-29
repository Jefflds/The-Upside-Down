// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY-w6Ilyk-n2p7rLmyrUU-ta3zQEqu0ZI",
    authDomain: "the-upside-down-byjefflds.firebaseapp.com",
    projectId: "the-upside-down-byjefflds",
    storageBucket: "the-upside-down-byjefflds.appspot.com",
    messagingSenderId: "602784295734",
    appId: "1:602784295734:web:b79e3c117095d19e90e197",
    measurementId: "G-0C6P30CDGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export

export default app;

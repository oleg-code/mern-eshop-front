import firebase from 'firebase';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE94qyf0Rd6PHn3nVov3niEWZfFAmUx1Y",
  authDomain: "mern-101fb.firebaseapp.com",
  databaseURL: "https://mern-101fb.firebaseio.com",
  projectId: "mern-101fb",
  storageBucket: "mern-101fb.appspot.com",
  messagingSenderId: "888378328244",
  appId: "1:888378328244:web:2354340a4f46e73ab5c3e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

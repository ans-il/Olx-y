import firebase from "firebase";


const firebaseConfig = {
    apiKey: "API_KEY",  //add your key
    authDomain: "fir-5af95.firebaseapp.com",
    projectId: "fir-5af95",
    storageBucket: "fir-5af95.firebasestorage.app",
    messagingSenderId: "584784824402",
    appId: "1:584784824402:web:0d00a3ab0bc2b71bdc778b",
    measurementId: "G-QV2XD3JKKL"
  };


  export default firebase.initializeApp(firebaseConfig)

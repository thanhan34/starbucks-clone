import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBs6zZfklidg77mMhBdt0sPsMxx9m5oBDs",
    authDomain: "starbuck-clone.firebaseapp.com",
    projectId: "starbuck-clone",
    storageBucket: "starbuck-clone.appspot.com",
    messagingSenderId: "728837497387",
    appId: "1:728837497387:web:115cf2fc1876f18395806e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }

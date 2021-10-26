import { getMessaging } from "firebase/messaging";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZnxssa1_wu6IpVaOMSKhkW0RfJqqsgqc",
    authDomain: "raspi-syncer.firebaseapp.com",
    projectId: "raspi-syncer",
    storageBucket: "raspi-syncer.appspot.com",
    messagingSenderId: "1012288624541",
    appId: "1:1012288624541:web:501011953dcf184bc4c174",
    measurementId: "G-7FVTQLSJT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//---------------------------------------------------------------------------------------------
// this is the part I don't understand:
import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BJcYid_iSE6SFEV_iY4cG-rsjsyL0vUsGe6yWY1WGlrnfZuQBWF67LpLLs-9L-7csFUueexfb4MU9lSRWjbaQs0' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});


//------------------------------------------------------------------------------------------------------

const messaging = getMessaging();

// Add the public key generated from the console here.
messaging.getToken({ vapidKey: "BJcYid_iSE6SFEV_iY4cG-rsjsyL0vUsGe6yWY1WGlrnfZuQBWF67LpLLs-9L-7csFUueexfb4MU9lSRWjbaQs0" });

function revealMessage() {
    document.getElementById("HiddenMessage").style.display = "block";
}
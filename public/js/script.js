
const firebaseConfig = {
    apiKey: "AIzaSyAZnxssa1_wu6IpVaOMSKhkW0RfJqqsgqc",
    authDomain: "raspi-syncer.firebaseapp.com",
    projectId: "raspi-syncer",
    storageBucket: "raspi-syncer.appspot.com",
    messagingSenderId: "1012288624541",
    appId: "1:1012288624541:web:501011953dcf184bc4c174",
    measurementId: "G-7FVTQLSJT5"
};

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyAZnxssa1_wu6IpVaOMSKhkW0RfJqqsgqc",
    authDomain: "raspi-syncer.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://raspi-syncer-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();


function play() {
    firebase.database().ref('commands').set({
        action: "start",
        time: Date.now().toLocaleString()
    });
}

function reset() {
    firebase.database().ref('commands').set({
        action: "reset",
        time: 0
    });
}

function close_vid() {
    firebase.database().ref('commands').set({
        action: "close",
        time: Date.now()
    });
}


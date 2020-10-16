import firebase from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyCRomP0FnOXMto3FtrLmHmHvj-r7zQ8evQ",
        authDomain: "pecadoscapitales-4e6e6.firebaseapp.com",
        databaseURL: "https://pecadoscapitales-4e6e6.firebaseio.com",
        projectId: "pecadoscapitales-4e6e6",
        storageBucket: "pecadoscapitales-4e6e6.appspot.com",
        messagingSenderId: "22809781185",
        appId: "1:22809781185:web:9ed111aeae3cd7ccae8540"
};
// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);
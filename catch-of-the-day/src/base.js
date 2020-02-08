import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyATGXdONvZBEEnK1QxRR5gpS9usvk3-uUE",
        authDomain: "catch-of-the-day-rr1.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-rr1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//Named Export
export { firebaseApp };

//default export 

export default base;
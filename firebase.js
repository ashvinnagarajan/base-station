import firebase from 'firebase';
 
// Set the configuration for your app
// TODO: Replace with your project's config object

 var config = {
   apiKey: "AIzaSyAnFTWZTgWEugKOSUM6WY_NkxrPzRzn6dU",
   authDomain: "bruin-racing.firebaseapp.com",
   databaseURL: "https://bruin-racing.firebaseio.com",
   projectId: "bruin-racing",
   storageBucket: "bucket.appspot.com"
 };

 firebase.initializeApp(config);
 
 export default firebase;
const firebaseConfig = {
      apiKey: "AIzaSyCh9Fk08fPB0THj6FikDT0XUa3ckHtjECI",
      authDomain: "kwitter-46e4c.firebaseapp.com",
      databaseURL: "https://kwitter-46e4c-default-rtdb.firebaseio.com",
      projectId: "kwitter-46e4c",
      storageBucket: "kwitter-46e4c.appspot.com",
      messagingSenderId: "683613250541",
      appId: "1:683613250541:web:f959143476b056dfab7de4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

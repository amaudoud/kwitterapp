const firebaseConfig = {
      apiKey: "AIzaSyDAxlS0sWQz7zDDrN9AqN2nWflYam7qwW0",
      authDomain: "kwitter-f0546.firebaseapp.com",
      databaseURL: "https://kwitter-f0546-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0546",
      storageBucket: "kwitter-f0546.appspot.com",
      messagingSenderId: "1044574915984",
      appId: "1:1044574915984:web:53013b22617f8266707715",
      measurementId: "G-QNV7YKEB7S"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
// Initialize Firebase 
 //firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

function logout() {
      window.location = "index.html";
}

function addRoom() {
      roomName = document.getElementById("room_name").value;
      console.log(roomName);
      firebase.database.ref("/").child(roomName).update({
            purpose: "addingroomname"
      });
      window.location = "kwitter_page.html";
}
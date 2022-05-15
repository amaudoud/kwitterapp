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
firebase.initializeApp(firebaseConfig);
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
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  console.log("Room Name - " + Room_names);
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
     
      window.location = "kwitter_page.html";
}

function logout() {
      window.location = "index.html";
}

function addRoom() {

      roomName = document.getElementById("room_name").value;
      localStorage.setItem("room_name", roomName);
      console.log(roomName);
      firebase.database().ref("/").child(roomName).update({
            purpose: "addingroomname"
      });
      window.location = "kwitter_page.html";
}
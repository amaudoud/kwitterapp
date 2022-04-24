const firebaseConfig = {
    apiKey: "AIzaSyCbyYQz5bs4R-zgSR1wuLCqOe567lQ1izw",
    authDomain: "kwitterapp-80078.firebaseapp.com",
    databaseURL: "https://kwitterapp-80078-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-80078",
    storageBucket: "kwitterapp-80078.appspot.com",
    messagingSenderId: "1063514710543",
    appId: "1:1063514710543:web:4ddd8121310c8ca4fe397a",
    measurementId: "G-08Z3VTTTXT"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
function login () {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user",user_name)
    window.location = "kwitter_room.html";

}
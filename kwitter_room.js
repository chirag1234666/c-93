
// Your web app's Firebase configution
var firebaseConfig = {
      apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
      authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
      databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
      projectId: "project-93-letschat-web-app-1",
      storageBucket: "project-93-letschat-web-app-1.appspot.com",
      messagingSenderId: "599747272052",
      appId: "1:599747272052:web:04fa716f9c059b29902021"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("username");
      document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

      function add_room() {
            room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname" ,room_name);

    window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

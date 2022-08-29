//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBdAjQRVLDOqslKfK8eFbSZexQ2RRXczfs",
      authDomain: "new-kwitter-app.firebaseapp.com",
      databaseURL: "https://new-kwitter-app-default-rtdb.firebaseio.com",
      projectId: "new-kwitter-app",
      storageBucket: "new-kwitter-app.appspot.com",
      messagingSenderId: "848529006758",
      appId: "1:848529006758:web:823f65dee8fff0fee21467",
      measurementId: "G-YPZ9SNYE4X"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();


function send(){
  var msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });
  document.getElementById("msg").value="";    
}

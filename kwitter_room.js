
const firebaseConfig = {
  apiKey: "AIzaSyAm9wzC3_ZP99DZ0McSTDmdeSYoNiAdrno",
  authDomain: "kwitter-p-c5b2d.firebaseapp.com",
  databaseURL: "https://kwitter-p-c5b2d-default-rtdb.firebaseio.com",
  projectId: "kwitter-p-c5b2d",
  storageBucket: "kwitter-p-c5b2d.appspot.com",
  messagingSenderId: "294331355801",
  appId: "1:294331355801:web:a7f6fc1a699ab24f2f1e08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  console.log("The user name is "+ user_name);
  document.getElementById("welcome_user").innerHTML="Welcome "+ user_name+ "!";

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    console.log(room_name);
    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_page.html";
    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room name"
});

    
  }
 /*  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div>#"+ Room_names +"</div><hr>";
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row; 
//End code
});});}
getData(); */
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
    row = "<div>#"+ Room_names +"</div><hr>";
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   }); }); } 
   getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html";
}
function logout(){
  window.location= "index.html";
  localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
}
  
  
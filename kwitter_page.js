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
const app = initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

function send(){
 message= document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
});
document.getElementById("msg").value= "";

}

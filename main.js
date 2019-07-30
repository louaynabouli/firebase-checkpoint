document.querySelector("#form").addEventListener("submit" , function(e){
    e.preventDefault()
    submitupload()
})
var firebaseConfig = {
    apiKey: "AIzaSyA6REd2dGnODP6uzc-D5lsm5fG67IV_x4Q",
    authDomain: "subscribe-info.firebaseapp.com",
    databaseURL: "https://subscribe-info.firebaseio.com",
    projectId: "subscribe-info",
    storageBucket: "",
    messagingSenderId: "379291783746",
    appId: "1:379291783746:web:a3126d5d6df03eec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   1 import libraries

// 2 create data var
let database = firebase.database()
// 3 set a Reference
let ref = database.ref("form")

function submitupload(){
let data = {
    name : document.querySelector("#name").value ,
    email :  document.querySelector("#email").value , 
    number : document.querySelector("#number").value , 
    school : document.querySelector("#school").value , 
    course : document.querySelector("#course").value 
}
ref.push(data)
}
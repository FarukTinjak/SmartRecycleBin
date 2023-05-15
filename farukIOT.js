
const firebaseConfig = {
    apiKey: "AIzaSyASMI0P5KV0Snpl6NOqusFVPbMCZtdT8pM",
    authDomain: "smarttrashcan-e1dce.firebaseapp.com",
    databaseURL: "https://smarttrashcan-e1dce-default-rtdb.firebaseio.com",
    projectId: "smarttrashcan-e1dce",
    storageBucket: "smarttrashcan-e1dce.appspot.com",
    messagingSenderId: "345651710761",
    appId: "1:345651710761:web:744a8beeed22e1193bc538",
    measurementId: "G-LDJ3DBG49T"
  };
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
  

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

// Add event listeners to the buttons
btn1.addEventListener('click', function() {
  div1.style.display = 'none';
  div2.style.display = 'block';
});

btn2.addEventListener('click', function() {
  div1.style.display = 'block';
  div2.style.display = 'none';
});

const button1 = document.getElementById("btn1");

button1.addEventListener("click", function() {
 
  var firebaseRef = firebase.database().ref("test");
  firebaseRef.set(true);
  }
 
);

const button2 = document.getElementById("btn2");

button2.addEventListener("click", function() {
 
  var firebaseRef = firebase.database().ref("test");
  firebaseRef.set(false);
  }
 
);

const button3 = document.getElementById("btn3");

button3.addEventListener("click", function() {
 
  var firebaseRef = firebase.database().ref("senzor");
  firebaseRef.set(true);
  }
 
);
const button4 = document.getElementById("btn4");

button4.addEventListener("click", function() {
 
  var firebaseRef = firebase.database().ref("senzor");
  firebaseRef.set(false);
  }
 
);



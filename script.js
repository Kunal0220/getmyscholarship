


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJOFF6y99idguVlTm_ugAWGM9ap1XBsIE",
    authDomain: "scholarship-contactfrom.firebaseapp.com",
    databaseURL: "https://scholarship-contactfrom-default-rtdb.firebaseio.com",
    projectId: "scholarship-contactfrom",
    storageBucket: "scholarship-contactfrom.appspot.com",
    messagingSenderId: "947892930095",
    appId: "1:947892930095:web:c95da7f719b75ab4fd68da",
    measurementId: "G-WCMW55JQST"
};



firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var mail = getInputVal('mail');
  var phone = getInputVal('phone');
  var Pname = getInputVal('Pname');
  var Pmail = getInputVal('Pmail');
  var Aphone = getInputVal('Aphone');
  var tenMarks = getInputVal('tenMarks');
  var twelveMakrs = getInputVal('twelveMakrs');
  var location = getInputVal('location');
  var Ename = getInputVal('Ename');
  var Emarks = getInputVal('Emarks');
  var year = getInputVal('year');

  // Save message
  saveMessage(name,mail, phone, Pname, Pmail, Aphone, tenMarks , twelveMakrs, location ,Ename , Emarks ,year);

  // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,mail, phone, Pname, Pmail, Aphone, tenMarks , twelveMakrs, location ,Ename , Emarks ,year){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    mail:mail,
    phone:phone,
    Pname:Pname,
    Aphone:Aphone,
    tenMarks:tenMarks,
    twelveMakrs:twelveMakrs,
    location:location,
    Ename:Ename,
    Emarks:Emarks,
    year:year,
  });
}
// validation.js
console.log("jhadqj")
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phno = document.getElementById('phno').value.trim();

    
ref.push({
  name: name,
  email:email,
  phno:phno
})
  
    if (name === '') {
      alert('Please enter your name');
      return false;
    }

    var nameRegex = /^[a-zA-Z\s]+$/;
    if (name === '' || !nameRegex.test(name)) {
        alert('Please enter a valid name containing only letters and spaces');
        return false;
    }
//    ---------------------------------------------------------------------------------------------
var emailInput = document.getElementById('email');
var email = emailInput.value;

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
}





// -----------------------------------------------------------------------------------------------------
    if (email === '') {
      alert('Please enter your email');
      return false;
    }
    // You can add more complex email validation if needed
  
    if (phno === '') {
      alert('Please enter your phone number');
      return false;
    }
    var phnoRegex = /^\d{10}$/;
    if (!phnoRegex.test(phno)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
  
    // You can add more complex phone number validation if needed
  
    return true; // If all validations pass, the form will be submitted
  }

  const firebaseConfig = {
    apiKey: "AIzaSyBh09zyh5Jb5YIIA0kOpf3c0pG774x4nK8",
    authDomain: "contactform-608a7.firebaseapp.com",
    databaseURL: "https://contactform-608a7-default-rtdb.firebaseio.com",
    projectId: "contactform-608a7",
    storageBucket: "contactform-608a7.appspot.com",
    messagingSenderId: "780068862338",
    appId: "1:780068862338:web:60781831d7b3a97f03379b",
    measurementId: "G-68GGSNXF8C"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database ()
const ref = database.ref("messages")

  

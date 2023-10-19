'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});




/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { 
        elemToggleFunc(toggleBtns[i]); 
      }
    
      elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

//////////////////////////////////////////////////////////////////
////////////Feed back////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
// const subject2 = document.getElementById('subject2');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    alert("Form submitted successfully");
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    // const subject2Value = subject2.value.trim();
    const feedbackValue = feedback.value;

    if(usernameValue === '') {
        setError(username, 'Username can never be an emptyspace');
    } else if(!isNaN(usernameValue)){
      setError(username, 'Username can never be Numbers');
    } else{
      setSuccess(username);

    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else if (subjectValue.length > 10 ) {
        setError(subject, 'Your subject must contain not more than 10 character.')
    } else {
        setSuccess(subject, );
    }

    if(feedbackValue == ' ') {
        setError(feedbackValue, 'Feedback is required');
   
    } else {
        
        setSuccess(feedbackValue);
    }
};
//##################################################
// Database function/ form data
  
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
///
const myDiv = document.getElementById('myDiv');
const toggleButton = document.getElementById('toggleButton'); // Add a button for toggling

toggleButton.addEventListener('click', function () {
  // Check the current class of the div
  if (myDiv.classList.contains('light-style')) {
    // If it has the light style, switch to the dark style
    myDiv.classList.remove('light-style');
    myDiv.classList.add('dark-style');
  } else {
    // If it has the light style or no style, switch to the dark style
    myDiv.classList.remove('dark-style');
    myDiv.classList.add('light-style');
  }
});

function openChatAp(){
  window.open("http://localhost:3000", 
              "Chat - App", 
              "popup,left=100,top=100,width=520,height=600");
}

function openGameWindow(){
  window.open("http://localhost:3001", 
              "Tic-Tac-Toe - Game", 
              "popup,left=200,top=100,width=520,height=600");
}

// JavaScript for the cookie consent banner
let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  //Create date object
  let d = new Date();
  //Increment the current time by 1 minute (cookie will expire after 1 minute)
  d.setMinutes(2 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
//Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};

function handleFileUpload() {
  const fileInput = document.getElementById('fileInput');
  const imageContainer = document.getElementById('imageContainer');

  // Check if a file is selected
  if (fileInput.files.length === 0) {
      alert('Please select a file.');
      return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
      // `event.target.result` contains the binary data as an ArrayBuffer
      const binaryData = event.target.result;

      // Create an image element and set its source to the binary data
      const image = document.createElement('img');
      image.src = arrayBufferToDataURL(binaryData);

      // Append the image to the container
      imageContainer.appendChild(image);
  };

  reader.readAsArrayBuffer(file);
}

// Helper function to convert ArrayBuffer to Data URL for displaying images
function arrayBufferToDataURL(arrayBuffer) {
  const blob = new Blob([arrayBuffer], { type: 'image/jpeg' }); // Adjust the type as needed
  const urlCreator = window.URL || window.webkitURL;
  return urlCreator.createObjectURL(blob);
}

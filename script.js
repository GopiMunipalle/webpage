let myFormEl = document.getElementById("myForm");

let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let passwordEl = document.getElementById("password");
let emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

passwordEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let nameValue = passwordEl.value;
    let emailValue = emailEl.value;
    const username='gopi@gmail.com';
    const password='2002';

  
    if (nameValue ===password && emailValue === username) {
        window.location.href = 'details.html';
    } else {
        window.alert("Incorrect username or password. Please try again.");
    }
  });
  
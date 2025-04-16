let form = document.getElementById("signup-form");

let isLoggedin = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;

  let pass = document.getElementById("pass").value;

  let userdata = JSON.parse(localStorage.getItem("userdata"));

  if (userdata.email === email && userdata.pass === pass) {
    localStorage.setItem("isloggedin", isLoggedin);

    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
});

let form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let pass = document.getElementById("pass").value;

  let userdata = {
    name: name,
    email: email,
    pass: pass,
  };

  localStorage.setItem("userdata", JSON.stringify(userdata));

  window.location.href = "login.html";
});

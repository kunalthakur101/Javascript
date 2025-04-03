let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let userdata = {
    name: username,
    email: email,
    password: pass,
  };

  localStorage.setItem("userdetails", JSON.stringify(userdata));

  alert("User registered successfully");
});

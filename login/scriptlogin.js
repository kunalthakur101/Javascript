let btn = document.getElementById("login");

btn.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let details = JSON.parse(localStorage.getItem("userdetails"));

  if (details.email === email && details.password === pass) {
    alert("login successfully");

    window.location.href = "dashboard.html";
  } else {
    alert("invalid credentials");
  }
});

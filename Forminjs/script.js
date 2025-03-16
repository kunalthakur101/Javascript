let userform = document.getElementById("userform");

userform.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let city = document.getElementById("city").value;

  const ul = document.getElementById("userlist");

  let li = document.createElement("li");

  li.textContent = `Name: ${name} Email: ${email} Age: ${age} city: ${city}`;

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";

  deletebtn.onclick = () => {
    ul.removeChild(li);
  };

  li.appendChild(deletebtn);

  ul.appendChild(li);

  document.getElementById("userform").reset();
});

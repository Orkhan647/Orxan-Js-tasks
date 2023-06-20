document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("e-mail");
  const btn = document.querySelector("button");

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      emailInput.classList.add("invalid");
    } else {
      emailInput.classList.remove("invalid");
    }
  });

  function validateEmail(email) {
    const [username, domain] = email.split("@");

    return username.length >= 3 && domain.length >= 5;
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("e-mail").value;

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      alert("Email is not valid. Please enter a valid email address.");
      return;
    }

    const data = {
      name: name,
      surname: surname,
      age: age,
      email: email,
    };

    axios.post("http://localhost:3000/Users", data).then(() => {
      alert("You have successfully registered.");
    });
  });
});

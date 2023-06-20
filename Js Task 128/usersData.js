const users = "http://localhost:3000/Users/";
const usersData = document.getElementById("usersData");
const existingEmails = [];

axios.get(users).then(({ data }) => {
  data.forEach((user) => {
    if (!existingEmails.includes(user.email)) {
      existingEmails.push(user.email);

      usersData.innerHTML += `
              <h3> Name: ${user.name}</h3>
              <h3> Surname:${user.surname}</h3>
              <h3> Age: ${user.age}</h3>
              <h3> E-mail: ${user.email}</h3><br>
              <button onclick="removeUser(${user.id})">❌</button>`;
    }
  });
});

function removeUser(id) {
  const tesdiq = confirm("Userin datalarini silmeye razisanmi?");
  if (tesdiq) {
    axios.delete(users + id).then(() => {
      alert("User ugurla silindi");
      document.location.reload();
    });
  } else {
    document.location.reload();
  }
}



const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("#button");
// message.value = "ddd";

button.addEventListener("click", () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "davidemail289@gmail.com",
    Password: "87D8265946DC2E6AB9DA5D35C38B191DEF45",
    To: "davidemail289@gmail.com",
    From: email.value,
    Subject: "1-2 Provera",
    Body: message.value,
  }).then((message) => alert(message));

  return alert("Sent");
});

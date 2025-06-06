document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!email.includes("@")) {
    alert("Invalid email format.");
    e.preventDefault();
  }
});

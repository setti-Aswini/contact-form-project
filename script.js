document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('All fields are required.');
    e.preventDefault();
  } else if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});

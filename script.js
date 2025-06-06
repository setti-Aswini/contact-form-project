document.querySelector('form').addEventListener('submit', e => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('All fields are required.');
    e.preventDefault(); // Stop form from submitting
  } else if (!email.includes('@')) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }
});

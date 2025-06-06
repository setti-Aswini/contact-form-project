document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (name.length < 3) {
    alert('Name must be at least 3 characters long.');
    event.preventDefault();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    event.preventDefault();
    return;
  }

  if (message.length < 5) {
    alert('Message must be at least 5 characters long.');
    event.preventDefault();
    return;
  }

  alert('Form submitted successfully!');
});

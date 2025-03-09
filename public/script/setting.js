// Add interactivity for edit buttons
const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    if (input.readOnly) {
      input.readOnly = false;
      input.focus();
      button.textContent = 'Save';
    } else {
      input.readOnly = true;
      button.textContent = 'Edit';
      alert(`Saved: ${input.value}`);
    }
  });
});

// Logout button action
const logoutButton = document.querySelector('.logout-btn');
logoutButton.addEventListener('click', () => {
  alert('You have been logged out.');
  // Redirect to login page or perform logout logic here
});
// Add interactivity for message buttons
const messageButtons = document.querySelectorAll('.message-btn');

messageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const friendName = button.closest('.friend-card').querySelector('h2').textContent;
    alert(`You clicked "Message" for ${friendName}`);
    // Redirect to chat or open a messaging interface here
  });
});
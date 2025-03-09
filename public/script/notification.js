// Add animations or interactions for notifications
const notificationItems = document.querySelectorAll('.notification-item');

notificationItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.remove('new'); // Mark as read
    alert(`You clicked on a notification: ${item.querySelector('p').textContent}`);
  });
});
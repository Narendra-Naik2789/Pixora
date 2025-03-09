// Randomize posts, followers, and following counts
const postsCount = document.getElementById('posts-count');
const followersCount = document.getElementById('followers-count');
const followingCount = document.getElementById('following-count');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

postsCount.textContent = getRandomNumber(100, 10000);
followersCount.textContent = getRandomNumber(100, 10000);
followingCount.textContent = getRandomNumber(100, 10000);
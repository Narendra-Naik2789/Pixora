document.addEventListener("DOMContentLoaded", function () {
    // Selecting all elements with count, com-count, and tag5
    let countElements = document.querySelectorAll("#count");
    let comCountElements = document.querySelectorAll("#com-count");
    let dayElements = document.querySelectorAll(".tag5");

    countElements.forEach(count => {
        let like = Math.floor(Math.random() * 1000) + 1;
        count.innerText = like;
    });

    comCountElements.forEach(comCount => {
        let comments = Math.floor(Math.random() * 50) + 1; // Generates between 1 and 50
        comCount.innerText = comments + "k";
    });

    dayElements.forEach(dayElement => {
        let days = Math.floor(Math.random() * 30) + 1;
        dayElement.innerText = days + " days ago";
    });
});

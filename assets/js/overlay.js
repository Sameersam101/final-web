// This JS file is responsible for overlay of the content

// Fixed container
const fixedContainer = document.querySelector(".fixed-container");

// book info
const bookLogo = fixedContainer.querySelector(".book-img .header .logo img");
const bookInfo = document.getElementById("bookInfo");
const bookTitle = bookInfo.querySelector(".title");
const bookAurthor = bookInfo.querySelector(".author");
const bookImg = document.querySelector("#bookImg img.img");

const commentorImg = document.querySelector(".comments .logo img");
const commentorName = document.querySelector(".comments .comment .author");
const commentorUsername = document.querySelector(
  ".comments .comment .username"
);
const commentorReview = document.querySelector(".comments .review");

// Modal close button
const closeModal = fixedContainer.querySelector(".close");
closeModal.onclick = () => {
  fixedContainer.style.display = "none";
};

// Get all the boxes inside of team-content with class='box'
const boxes = document.querySelectorAll(".team-content .box");

// Show book infos
const showOverlay = (item, id) => {
  const img = item.querySelector(".img");
  const title = item.querySelector(".title");
  const author = item.querySelector(".author");

  const comment = item.querySelector(".comment");
  const logo = comment.querySelector(".comment .logo");
  const name = comment.querySelector(".author .name");
  const username = comment.querySelector(".author .username");
  const review = comment.querySelector(".review");

  bookTitle.innerHTML = title.innerHTML;
  bookAurthor.innerHTML = author.innerHTML;
  bookImg.src = img.src;
  bookLogo.src = img.src;

  commentorImg.src = logo.src;
  commentorName.innerHTML = name.innerHTML;
  commentorUsername.innerHTML = username.innerHTML;
  commentorReview.innerHTML = review.innerHTML;

  fixedContainer.style.display = "flex";
};

// Add click event to all the book boxes
boxes.forEach((item, index) => {
  item.onclick = () => showOverlay(item, index);
});

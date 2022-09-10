// set content of slider
const listContents = ["hutan.webp", "gunung.webp"];
// get the first of element with id of slider-gallery and class is thumbnail
const sliderGallery = document.getElementById("slider-contents");
const containerThumbnail = document.querySelector(".thumbnail");

for (let idx = 0; idx < listContents.length; idx++) {
  const imageContent = listContents[idx];

  // sliderGallery exist then fill out some contents to the sliderGallery
  const content = document.createElement("div");
  content.className = "slide";

  // text slider element
  const sliderText = document.createElement("div");
  sliderText.classList.add("numbertext");
  sliderText.textContent = `${idx + 1} / ${listContents.length}`;
  // img slider element
  const sliderImg = document.createElement("img");
  sliderImg.style.width = "100%";
  sliderImg.style.height = "600px";
  sliderImg.style.objectFit = "contain";
  sliderImg.style.backgroundColor = "black";
  sliderImg.src = `/assets/img/${imageContent}`;

  // append text and image to the conteent
  content.appendChild(sliderText);
  content.appendChild(sliderImg);

  // append current content to the sliderGallery as first child
  if (sliderGallery)
    sliderGallery.insertAdjacentElement("beforebegin", content);

  // column of thumbnail
  const columnThumbnail = document.createElement("div");
  columnThumbnail.classList.add("column");

  // img thumbnail element
  const thumbnailImg = document.createElement("img");
  thumbnailImg.style.width = "100%";
  thumbnailImg.style.height = "100px";
  thumbnailImg.style.objectFit = "contain";
  thumbnailImg.style.backgroundColor = "black";
  thumbnailImg.classList.add("thumbnail-img", "cursor-pointer");
  thumbnailImg.src = `/assets/img/${imageContent}`;
  thumbnailImg.setAttribute("onclick", `currentSlide(${idx + 1});`);

  // append image of thumbnail to the thumbnail's column
  columnThumbnail.appendChild(thumbnailImg);
  // append column to the container of thumbnail

  // append thumbnail's column to the container of thumbnail
  if (containerThumbnail) containerThumbnail.append(columnThumbnail);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("thumbnail-img");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

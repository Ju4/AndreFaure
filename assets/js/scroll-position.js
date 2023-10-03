let video_item = document.getElementById("video_presentation");
let carousel_item = document.getElementById("carousel_presentation");
if (video_item) {
  video_item.scrollIntoView();
} else if (carousel_item) {
  carousel_item.scrollIntoView();
}
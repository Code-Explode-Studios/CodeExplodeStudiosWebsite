// Public variables for the player elements
const MediaIframe = document.getElementById('MediaIframe');
const MediaImage = document.getElementById('MediaImage');
const LeftArrowButton = document.getElementById('LeftArrowButton');
const RightArrowButton = document.getElementById('RightArrowButton');

// Media list: images first, YouTube video last
const MediaList = [
  { Type: 'image', Src: 'IMAGES/VIRUS GUNNER GAMEPLAY THUMBNAIL.png' },
  { Type: 'image', Src: 'IMAGES/VIRUS GUNNER GAMEPLAY 1.png' },
  { Type: 'image', Src: 'IMAGES/VIRUS GUNNER GAMEPLAY 2.png' },
  { Type: 'image', Src: 'IMAGES/VIRUS GUNNER GAMEPLAY 3.png' },
  { Type: 'youtube', Src: 'https://www.youtube.com/embed/_XoTFc-1r8c?si=aKL-WGD86JjUK4LU' }
];

// Public variable to keep track of the current index
let CurrentMediaIndex = 0;

// Public function to load media by index
function LoadMediaByIndex(MediaIndex) {
  if (MediaIndex < 0) {
    CurrentMediaIndex = MediaList.length - 1;
  } else if (MediaIndex >= MediaList.length) {
    CurrentMediaIndex = 0;
  } else {
    CurrentMediaIndex = MediaIndex;
  }

  const CurrentMedia = MediaList[CurrentMediaIndex];

  if (CurrentMedia.Type === 'youtube') {
    MediaImage.style.display = 'none';
    MediaIframe.style.display = 'block';
    MediaIframe.src = CurrentMedia.Src;
  } else {
    MediaIframe.src = '';
    MediaIframe.style.display = 'none';
    MediaImage.style.display = 'block';
    MediaImage.src = CurrentMedia.Src;
  }
}

// Show previous media
function ShowPreviousMedia() {
  LoadMediaByIndex(CurrentMediaIndex - 1);
}

// Show next media
function ShowNextMedia() {
  LoadMediaByIndex(CurrentMediaIndex + 1);
}

// Arrow button event listeners
LeftArrowButton.addEventListener('click', ShowPreviousMedia);
RightArrowButton.addEventListener('click', ShowNextMedia);

// Load the first media on page load
LoadMediaByIndex(0);

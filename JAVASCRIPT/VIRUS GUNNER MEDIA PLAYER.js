// Public variables for the Virus Gunner media player elements
const MediaIframe = document.getElementById('MediaIframe');
const MediaImage = document.getElementById('MediaImage');
const LeftArrowButton = document.getElementById('LeftArrowButton');
const RightArrowButton = document.getElementById('RightArrowButton');

// Media list: images first, YouTube video last
const MediaList = [
  { Type: 'image', Src: 'https://drive.google.com/thumbnail?id=10ih6nUM88Z26AYzFdXt_XGU9T5U98b6c&sz=w640' },
  { Type: 'image', Src: 'https://drive.google.com/thumbnail?id=1d1ioFfCgx9nZTLjvDqnXrNs1YOTfVoWU&sz=w640' },
  { Type: 'image', Src: 'https://drive.google.com/thumbnail?id=13skoA9mPahYdd8w69VyFvvXW4HCKYq6j&sz=w640' },
  { Type: 'image', Src: 'https://drive.google.com/thumbnail?id=1poi19anLTzp9qUYS1Dz3cPNub_wO9pr8&sz=w640' },
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

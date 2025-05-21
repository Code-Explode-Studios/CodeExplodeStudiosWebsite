// Public variables for the Ash Vegas media player elements
const MediaIframe = document.getElementById('MediaIframe');
const MediaImage = document.getElementById('MediaImage');
const LeftArrowButton = document.getElementById('LeftArrowButton');
const RightArrowButton = document.getElementById('RightArrowButton');

// Public media list for Charlies Rage Stage (images first, YouTube last)
const MediaList = [
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1FeEi_NQR27Qlmotv5LHxxp1BLMzWbnSU&sz=w640 },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1FeEi_NQR27Qlmotv5LHxxp1BLMzWbnSU&sz=w640 },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1FeEi_NQR27Qlmotv5LHxxp1BLMzWbnSU&sz=w640 },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1FeEi_NQR27Qlmotv5LHxxp1BLMzWbnSU&sz=w640 },
  { Type: 'youtube', Src: 'https://www.youtube.com/embed/YOUR_GAME_VIDEO_ID_HERE' } // Change this to your actual vid
];

// Public variable to track current index
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

// Public functions to go forward/back
function ShowPreviousMedia() {
  LoadMediaByIndex(CurrentMediaIndex - 1);
}

function ShowNextMedia() {
  LoadMediaByIndex(CurrentMediaIndex + 1);
}

// Hook up the buttons, obviously
LeftArrowButton.addEventListener('click', ShowPreviousMedia);
RightArrowButton.addEventListener('click', ShowNextMedia);

// Load first thing on load
LoadMediaByIndex(0);

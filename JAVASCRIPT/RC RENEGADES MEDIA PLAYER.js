// Public variables for the media player
const MediaIframe = document.getElementById('MediaIframe');
const MediaImage = document.getElementById('MediaImage');
const LeftArrowButton = document.getElementById('LeftArrowButton');
const RightArrowButton = document.getElementById('RightArrowButton');

// Media list for RC Renegades
const MediaList = [
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1s_-iRgKfvBEnQf0edg8LcFaNfU252cag&sz=w640 },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1KrmHAHibRcTuKXkRxpL77q_rmHfDK4IC&sz=w640 },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1yxbAdeF5kENSF9AEtFVSGXqfWfN_2-QA&sz=w640' },
  { Type: 'image', Src: https://drive.google.com/thumbnail?id=1r-kHsuy9pyHOOIs94ZIsv-OqsobO7iEp&sz=w640 },
  { Type: 'youtube', Src: 'https://www.youtube.com/embed/REPLACE_THIS_WITH_REAL_VIDEO_LINK' } // Replace this later, fam
];

// Public variable for tracking current media
let CurrentMediaIndex = 0;

// Public function to load media
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

// Public functions for navigation
function ShowPreviousMedia() {
  LoadMediaByIndex(CurrentMediaIndex - 1);
}

function ShowNextMedia() {
  LoadMediaByIndex(CurrentMediaIndex + 1);
}

// Event listeners
LeftArrowButton.addEventListener('click', ShowPreviousMedia);
RightArrowButton.addEventListener('click', ShowNextMedia);

// Load first media on page load
LoadMediaByIndex(0);

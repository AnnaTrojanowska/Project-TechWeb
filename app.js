function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "nav-links";
    }
  }

  const playButton = document.getElementById('play');
  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  playButton.addEventListener('click', togglePlay);
  const playbackIcons = document.querySelectorAll('.playback-icons use');
  function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
  }
  video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused) {
    playButton.setAttribute('data-title', 'Play (k)')
  } else {
    playButton.setAttribute('data-title', 'Pause (k)')
  }
}

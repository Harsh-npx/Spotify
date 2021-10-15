let songIndex = 0;
let audioElement = new Audio("Songs/1.mp4");
let masterPlay = document.getElementById("masterPlay");
let audioProgress = document.getElementById("audioProgress");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let listSongPlay = Array.from(document.getElementsByClassName("songPlay"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
  {
    songName: "My Hero Academia - Jet Set Run",
    filePath: "Songs/1.mp4",
    songDuration: "04:01",
  },
  {
    songName: "My Hero Academia - Hero A",
    filePath: "Songs/2.mp4",
    songDuration: "03:18",
  },
  {
    songName: "My Hero Academia - Plus Ultra",
    filePath: "Songs/3.mp4",
    songDuration: "02:35",
  },
  {
    songName: "My Hero Academia - Just Another Hero",
    filePath: "Songs/4.mp4",
    songDuration: "03:24",
  },
  {
    songName: "Jojo - Jotaro Theme Trap Remix",
    filePath: "Songs/5.mp4",
    songDuration: "02:48",
  },
  {
    songName: "My Hero Academia - Jet Set Run Ultimate Cover",
    filePath: "Songs/6.mp4",
    songDuration: "03:46",
  },
  {
    songName: "My Hero Academia - AFO vs All Might",
    filePath: "Songs/7.mp4",
    songDuration: "02:27",
  },
  {
    songName: "Naruto - Fighting Spirit Trap Remix",
    filePath: "Songs/8.mp4",
    songDuration: "02:12",
  },
  {
    songName: "One Slash Man",
    filePath: "Songs/9.mp4",
    songDuration: "01:42",
  },
  {
    songName: "Overtaken Trap Remix",
    filePath: "Songs/10.mp4",
    songDuration: "02:49",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  audioProgress.value = progress;
});
audioProgress.addEventListener("change", () => {
  audioElement.currentTime =
    (audioProgress.value * audioElement.duration) / 100;
});

songItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex + 1}.mp4`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
  });
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 0 + 1) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp4`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});
document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9 - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex + 1}.mp4`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});

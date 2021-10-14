let songIndex = 0;
let audioElement = new Audio("Songs/1.mp4");
let masterPlay = document.getElementById("masterPlay");
let audioProgress = document.getElementById("audioProgress");
let songs = [
  {
    songName: "My Hero Academia - Jet Set Run",
    filePath: "Songs/1.mp4",
  },
];

masterPlay.addEventListener("click", () => {
  audioElement.play();
});

audioProgress.addEventListener("timeupdate", () => {
  console.log("Time Updated");
});

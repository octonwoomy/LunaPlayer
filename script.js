const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volumeSlider = document.getElementById("volume");
const skip = document.getElementById("skip");
const rewind = document.getElementById("rewind");
const shuffle = document.getElementById("shuffle");
const coverImage = document.querySelector('.card');
const cover = document.querySelector('.cover')
coverImage.style.background = getRandomGradient();
const playlist = {
    song: ['music/live_from_the_ufo.mp3', 'music/Everybody Wants To Rule The World.mp3', 'music/Joji - YUKON (INTERLUDE).mp3', "music/80's makeout session.mp3", "music/90sFlav - Call me.mp3", "music/Beach House - Space Song.mp3", "music/Billie Eilish - everything i wanted (Audio).mp3", "music/CUCO - Lover Is a Day (Audio).mp3", "music/Dead Planets - Strawberry.mp3", "music/ellis - hospital (official visualizer).mp3", "music/Find Your Throne.mp3", "music/First Love  Late Spring.mp3", "music/goosetaf & Timothy Infinite - Bumblebee.mp3", "music/Green Day - Bang Bang (Official Lyric Video).mp3", "music/How (demo).mp3", "music/idwtmfitp.wav", "music/Joji - Die For You.mp3", "music/Joji - Gimme Love.mp3", "music/Meteor Shower.mp3", "music/Mini Trees - “Numb” (Official Lyric Video).mp3", "music/Mini Trees - “Otherwise” (Official Lyric Video).mp3", "music/Moe Shop - Notice (w TORIENA).mp3", "music/mxmtoon - prom dress (audio).mp3", "music/Nice Boys.mp3", "music/Say Less.mp3", "music/Strawberry Blond.mp3", "music/the insides of tears.mp3", "music/The Moon Song.mp3"],
    artist: ['Origami Angel', 'Tears for Fears', 'Joji'],
    songname: [
      'live from the ufo', 'Everybody Wants To Rule The World', 'Joji - YUKON (INTERLUDE)', "80's makeout session", "90sFlav - Call me", "Beach House - Space Song", "Billie Eilish - everything i wanted", "CUCO - Lover Is a Day", "Dead Planets - Strawberry", "ellis - hospital", "Find Your Throne", "First Love Late Spring", "goosetaf & Timothy Infinite - Bumblebee", "Green Day - Bang Bang", "How (demo)", "IDWTMFITFP", "Joji - Die For You", "Joji - Gimme Love", "Meteor Shower", "Mini Trees - “Numb”", "Mini Trees - “Otherwise”", "Moe Shop - Notice (w TORIENA)", "mxmtoon - prom dress", "Nice Boys", "Say Less", "Strawberry Blond", "the insides of tears", "The Moon Song"
    ]
  };

let currentSong;
let currentSongIndex = 0;

function getrandsong() {
  if (currentSong) {
    currentSong.pause();
  }
  if(shuffle.checked){
    currentSongIndex = Math.floor(Math.random() * playlist.song.length);
  }else{
    currentSongIndex = (currentSongIndex + 1) % playlist.song.length;
  }
  playSongAtIndex(currentSongIndex);
}

function playSongAtIndex(index) {
    if (currentSong) {
      currentSong.pause();
    }
    currentSong = new Audio(playlist.song[index]);
    currentSong.volume = volumeSlider.value;
  
    currentSong.addEventListener('ended', function () {
      getrandsong();
    });
    currentSong.play();
  
    coverImage.style.background = getRandomGradient();
  
    const currentSongTitle = playlist.songname[index];
    const songInfo = `${currentSongTitle}`;
    document.getElementById("container").textContent = songInfo;
  }
  
  function getRandomGradient() {
    const angle = Math.floor(Math.random() * 360);
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    cover.style.background = color2;
    return `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
  }
  
  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  

function pausesong() {
  if (currentSong) {
    currentSong.pause();
  }
}

function updateVolume() {
  if (currentSong) {
    currentSong.volume = volumeSlider.value;
  }
}

function rewindsong() {
    if (currentSong) {
      currentSong.pause();
    }
    if (currentSongIndex > 0) {
      currentSongIndex--;
    } else {
      currentSongIndex = playlist.song.length - 1;
    }
    playSongAtIndex(currentSongIndex);
  }
  
play.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.song.length;
    playSongAtIndex(currentSongIndex);
});
skip.addEventListener("click", getrandsong);
pause.addEventListener("click", pausesong);
volumeSlider.addEventListener("input", updateVolume);
rewind.addEventListener("click", rewindsong);

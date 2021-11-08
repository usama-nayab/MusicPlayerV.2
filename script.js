// variables initialization
let back = document.getElementById('back');
let play = document.getElementById('play');
let forward = document.getElementById('forward');
let progressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songitem'));
let playIcon = Array.from(document.getElementsByClassName('playicon'));
let songIndex = 1;
let prev = document.getElementById('back');
let next = document.getElementById('forward');
let nameAtGif = document.getElementById('nameatgif');


let songs = [
    {
        songName: '01. GUMAAN - Young Stunners',
        filePath: 'songs/1.mp3',
        coverPath: 'guman.jpg'
    },
    {
        songName: '02. AFSANAY - Young Stunners ',
        filePath: 'songs/2.mp3',
        coverPath: 'afsany.jpg'
    },
    {
        songName: '03. LAGA REH  - Young Stunners',
        filePath: 'songs/3.mp3',
        coverPath: 'lagareh.jpeg'
    },
    {
        songName: '04. PURPOSE RAP - Young Stunners',
        filePath: 'songs/4.mp3',
        coverPath: 'purpose.jpeg'
    },
    {
        songName: '05. WHY NOT - Young Stunners',
        filePath: 'songs/5.mp3',
        coverPath: 'whynot.jpg'
    },
    {
        songName: '06. QUARANTINE - Young Stunners | KR$NA',
        filePath: 'songs/6.mp3',
        coverPath: 'quar.jpg'
    },
    {
        songName: '07. WOH BANDA NAI - Young Stunners',
        filePath: 'songs/7.mp3',
        coverPath: 'bndanh.jpg'
    },
    {
        songName: '08. DONT MIND - Young Stunners | Rap Demon',
        filePath: 'songs/8.mp3',
        coverPath: 'mind.jpeg'
    },

];

// loading data 
songItem.forEach((elem, i) => {
    elem.getElementsByTagName('img')[0].src = songs[i].coverPath;
    elem.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})

// play icons code
var makePlay = () => {
    playIcon.forEach((elem) => {
        elem.classList.replace('fa-pause-circle', 'fa-play-circle');
    })
}
playIcon.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        makePlay();
        e.target.classList.replace('fa-play-circle', 'fa-pause-circle');
        songIndex = e.target.id;
        // console.log('in playicon:' + songIndex);
        music.src = `songs/${songIndex}.mp3`;
        music.currentTime = 0;
        music.play();
        gif.style.opacity = 1;
        nameAtGif.innerHTML = songs[songIndex-1].songName;
        play.classList.replace('fa-play-circle', 'fa-pause-circle');

    })
})

// for next music
next.addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 1;
    } else {
        songIndex++;
    }
    music.src = `songs/${songIndex}.mp3`;
    makePlay();
    playIcon[songIndex-1].classList.replace('fa-play-circle', 'fa-pause-circle');
    music.currentTime = 0;
    music.play();
    gif.style.opacity = 1;
    nameAtGif.innerHTML = songs[songIndex-1].songName;
    play.classList.replace('fa-play-circle', 'fa-pause-circle');
})



// for previous music
prev.addEventListener('click', () => {
    if (songIndex <= 1 || songIndex >= 8) {
        songIndex = 1;
    } else {
        songIndex--;
    }
    music.src = `songs/${songIndex}.mp3`;
    makePlay();
    playIcon[songIndex-1].classList.replace('fa-play-circle' , 'fa-pause-circle');
    music.currentTime = 0;
    music.play();
    gif.style.opacity = 1;
    nameAtGif.innerHTML = songs[songIndex-1].songName;
    play.classList.replace('fa-play-circle', 'fa-pause-circle');
})

//for


let music = new Audio('songs/1.mp3');
// music.play();




// handle play pause click
play.addEventListener('click', () => {
    if (music.paused || music.currentTime == 0) {
        music.play();
        play.classList.replace('fa-play-circle', 'fa-pause-circle');
        gif.style.opacity = 1;
        nameAtGif.innerHTML = songs[songIndex-1].songName;
        playIcon[songIndex-1].classList.replace('fa-play-circle', 'fa-pause-circle');
    } else {
        music.pause();
        play.classList.replace('fa-pause-circle', 'fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Handle progress bar
music.addEventListener('timeupdate', () => {
    // update progress bar
    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    music.currentTime = (progressBar.value * music.duration) / 100;
    // console.log(music.currentTime);
})
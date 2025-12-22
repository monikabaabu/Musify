let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('audio/1.mp3');
let currentSong =1;
let currentIndex = 0;
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

play.addEventListener('click', () => {
    if(audio.paused  || audio.currentTime == 0){
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        updatePlayIcons(); 
    }
    else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        updatePlayIcons();
    }
});

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background =`linear-gradient(to right, #4caf50 ${progress}%, #333 ${progress}%)`;
    currentTimeEl.innerText = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    durationEl.innerText = formatTime(audio.duration);
});

progressBar.addEventListener('input', function()  {
    let value= this.value;
    this.style.background = `linear-gradient(to right, #4caf50 ${value}%, #3333 ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration)/100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic')); 

makeAllPlay= () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

function updatePlayIcons() {
    document.querySelectorAll('.playMusic').forEach(icon => {
        const id = icon.id || icon.dataset.id;
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
        if (Number(id) === currentSong && !audio.paused) {
            icon.classList.remove('fa-circle-play');
            icon.classList.add('fa-circle-pause');
        }
    });
}

let allMusic =Array.from(document.getElementsByClassName('music-card'));

let songs = [
    { songName: 'Theera Ula', songDes: '-by A R Rahman', songImage: 'images/1.jpeg', songPath: 'audio/1.mp3' },
    { songName: 'Stylish Thamizhachi', songDes: '-by Yuvan Shankar Raja', songImage: 'images/2.jpg', songPath: 'audio/2.mp3' },
    { songName: 'Open Arms', songDes: '-by SZA', songImage: 'images/3.jpg', songPath: 'audio/3.mp3' },
    { songName: '170CM', songDes: '-by Paal Dabba', songImage: 'images/4.jpg', songPath: 'audio/4.mp3' },
    { songName: 'Blank Space', songDes: '-by Taylor Swift', songImage: 'images/5.jpg', songPath: 'audio/5.mp3' },
    { songName: 'Doja', songDes: '-by Central Cee', songImage: 'images/6.jpg', songPath: 'audio/6.mp3' },
    { songName: 'Renegade', songDes: '-by Aaryan', songImage: 'images/7.jpeg', songPath: 'audio/7.mp3' },
    { songName: 'Idhu Varai', songDes: '-by Andrea', songImage: 'images/8.jpg', songPath: 'audio/8.mp3' },
    { songName: '7 Rings', songDes: '-by Ariana Grande', songImage: 'images/9.jpg', songPath: 'audio/9.mp3' },
    { songName: 'Idhu Naal', songDes: '-by A R Rahman', songImage: 'images/10.jpg', songPath: 'audio/10.mp3' },
    { songName: 'Teddy Bear', songDes: '-by Dhanush', songImage: 'images/11.jpg', songPath: 'audio/11.mp3' },
    { songName: 'If the World Was Ending', songDes: '-by Julia Michaels', songImage: 'images/12.jpg', songPath: 'audio/12.mp3' },
    { songName: '34+35', songDes: '-by Ariana Grande', songImage: 'images/13.jpg', songPath: 'audio/13.mp3' },
    { songName: 'Nangaai', songDes: '-by Harris Jayaraj', songImage: 'images/14.jpg', songPath: 'audio/14.mp3' },
    { songName: 'Idhuvum Kadandhu Pogum', songDes: '-by Sid Sriram', songImage: 'images/15.jpg', songPath: 'audio/15.mp3' },
    { songName: 'Sunsetz', songDes: '-by Cigarettes After Sex', songImage: 'images/16.jpg', songPath: 'audio/16.mp3' },
    { songName: 'Malargal Ketten', songDes: '-by A R Rahman', songImage: 'images/17.jpeg', songPath: 'audio/17.mp3' },
    { songName: 'Nee Partha Vizhigal', songDes: '-by Anirudh', songImage: 'images/18.jpeg', songPath: 'audio/18.mp3' },
    { songName: 'Under The Influence', songDes: '-by Chris Brown', songImage: 'images/19.jpg', songPath: 'audio/19.mp3' },
    { songName: 'Thank U, Next', songDes: '-by Ariana Grande', songImage: 'images/20.jpg', songPath: 'audio/20.mp3' },
    { songName: 'Makkayala', songDes: '-by Vijay Antony', songImage: 'images/21.jpg', songPath: 'audio/21.mp3' },
    { songName: 'Cardigan', songDes: '-by Taylor Swift', songImage: 'images/22.jpg', songPath: 'audio/22.mp3' },
    { songName: 'So High', songDes: '-by Doja Cat', songImage: 'images/23.jpg', songPath: 'audio/23.mp3' },
    { songName: 'Naan Than Inge Visiri', songDes: '-by Sid Sriram', songImage: 'images/24.jpg', songPath: 'audio/24.mp3' },
    { songName: 'Oh Baby Girl', songDes: '-by Hemachandra', songImage: 'images/25.jpg', songPath: 'audio/25.mp3' },
    { songName: 'Yaaro Ivan', songDes: '-by G V Prakash', songImage: 'images/26.jpg', songPath: 'audio/26.mp3' },
    { songName: 'Wildflower', songDes: '-by Billie Eilish', songImage: 'images/27.jpg', songPath: 'audio/27.mp3' },
    { songName: 'Jalsa Pannungada', songDes: '-by Yuvan Shankar Raja', songImage: 'images/28.jpeg', songPath: 'audio/28.mp3' },
    { songName: 'Nenjukulle', songDes: '-by Ranjith', songImage: 'images/29.jpg', songPath: 'audio/29.mp3' },
    { songName: 'Nee Kavithaigala', songDes: '-by Pradeep Kumar', songImage: 'images/30.jpg', songPath: 'audio/30.mp3' }
];

order = [...songs];

allMusic.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songImage;
    element.getElementsByClassName('img-title')[0].innerText = songs[i].songName;
    element.getElementsByClassName('img-description')[0].innerText = songs[i].songDes;
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSongs (originalOrder) {
    order = [...originalOrder];
    for ( i = order.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
}

shuffle.addEventListener('click', () => {
    if(!songOnShuffle) {
        songOnShuffle = true;
        shuffle.classList.add('active');
        repeat.classList.remove('active');
        songOnRepeat = false;
        order = shuffleSongs(songs);
        currentIndex = 0;
    }
    else{
        songOnShuffle = false;
        shuffle.classList.remove('active');
        order = songs;
        currentIndex = currentSong - 1;
    }
});

repeat.addEventListener('click', () => {
    if(!songOnRepeat) {
        songOnRepeat = true;
        repeat.classList.add('active');
        shuffle.classList.remove('active');
        songOnShuffle = false;
    }
    else{
        songOnRepeat = false;
        repeat.classList.remove('active');
    }
});

playNextSong = () => {
    if (!songOnRepeat) {
        currentIndex = (currentIndex + 1) % order.length;
    }
    currentSong = songs.findIndex(s => s.songPath === order[currentIndex].songPath) + 1;
    audio.src = order[currentIndex].songPath;
    audio.currentTime = 0;
    audio.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    updateNowBar();
    updatePlayIcons();
    updateRecentlyPlayed(currentSong);
}

playPrevSong = () => {
    if (!songOnRepeat) {
        currentIndex = (currentIndex - 1 + order.length) % order.length;
    }
    currentSong = songs.findIndex(s => s.songPath === order[currentIndex].songPath) + 1;
    audio.src = order[currentIndex].songPath;
    audio.currentTime = 0;
    audio.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    updateNowBar();
    updatePlayIcons();
    updateRecentlyPlayed(currentSong);
}

function updateNowBar() {
    nowBar.getElementsByTagName('img')[0].src = order[currentIndex].songImage;
    nowBar.getElementsByClassName('img-title-info')[0].innerText = order[currentIndex].songName;
    nowBar.getElementsByClassName('img-des-info')[0].innerText = order[currentIndex].songDes;
}

forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    playNextSong();
});

audio.addEventListener('ended', () => {
    playNextSong();
});

backward.addEventListener('click', () => {
    playPrevSong();
});

let volumeBar = document.getElementById('volumeBar');
let volumeIcon = document.getElementById('volumeIcon');
let lastVolume = volumeBar.value / 100;
audio.volume = lastVolume;

volumeBar.addEventListener('input', () => {
    let value = volumeBar.value;
    let vol = value / 100;

    audio.muted = false; 
    audio.volume = vol;
    lastVolume = vol;
    volumeBar.style.background = `linear-gradient(to right, #4caf50 ${value}%, #333 ${value}%)`;
    if (value == 0) {
        volumeIcon.className = 'fa-solid fa-volume-mute';
        volumeIcon.style.color = '#4caf50';
    } else {
        volumeIcon.className = 'fa-solid fa-volume-high';
        volumeIcon.style.color = 'var(--nav-icon-color)';
    }
});

volumeIcon.addEventListener('click', () => {
    if (!audio.muted) {
        audio.muted = true;
        volumeIcon.className = 'fa-solid fa-volume-mute';
        volumeIcon.style.color = '#4caf50';
        volumeBar.value = 0;
        volumeBar.style.background =`linear-gradient(to right, #4caf50 0%, #333 0%)`;
    } else {
        audio.muted = false;
        audio.volume = lastVolume || 0.7;
        let value = audio.volume * 100;
        volumeBar.value = value;
        volumeIcon.className = 'fa-solid fa-volume-high';
        volumeIcon.style.color = 'var(--nav-icon-color)';
        volumeBar.style.background =
            `linear-gradient(to right, #4caf50 ${value}%, #333 ${value}%)`;
    }
});

let recentlyPlayed = [];
const MAX_RECENT = 10;

function updateRecentlyPlayed(songIndex) {
    recentlyPlayed = recentlyPlayed.filter(i => i !== songIndex);
    recentlyPlayed.unshift(songIndex);
    if (recentlyPlayed.length > MAX_RECENT) {
        recentlyPlayed.pop();
    }
    renderRecentlyPlayed();
}

function handleSongClick(index) {

    if (currentSong === index) {
        if (audio.paused) {
            audio.play();
            play.classList.replace('fa-circle-play', 'fa-circle-pause');
        } else {
            audio.pause();
            play.classList.replace('fa-circle-pause', 'fa-circle-play');
        }
    }
    else {
        currentSong = index;
        currentIndex = order.findIndex(s => s.songPath === songs[currentSong - 1].songPath);
        audio.src = order[currentIndex].songPath;
        audio.currentTime = 0;
        audio.play();
        play.classList.replace('fa-circle-play', 'fa-circle-pause');
        updateNowBar();
        updateRecentlyPlayed(currentSong);
    }
    updatePlayIcons();
}


document.addEventListener('click', (e) => {
    const icon = e.target;
    if (icon.classList.contains('playMusic')) {
        const index = Number(icon.dataset.id || icon.id);
        handleSongClick(index);
    }
});

function renderRecentlyPlayed() {
    const recentList = document.getElementById('recentList');
    if (!recentList) return;
    recentList.innerHTML = '';
    recentlyPlayed.forEach(index => {
        const song = songs[index - 1];
        const card = document.createElement('div');
        card.className = 'music-card recent-card';
        card.innerHTML = `
            <img src="${song.songImage}">
            <div class="music-play-btn">
                <i class="playMusic fa-solid fa-circle-play" data-id="${index}"></i>
            </div>
            <div class="img-title">${song.songName}</div>
            <div class="img-description">${song.songDes}</div>`;
        recentList.appendChild(card);
    });

    updatePlayIcons();
}

updateRecentlyPlayed(currentSong);

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

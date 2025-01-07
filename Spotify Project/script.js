// console.log("Welcome to Spotify");

// //Initialize the variables
// let songIndex =0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');



// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Para-dise-High-Swag" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
//     {songName: "Girl-I-need-you" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
//     {songName: "Only-Music-Sound" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
//     {songName: "High-Sound-Beats" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
//     {songName: "I-will-fly" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
//     {songName: "Sooraj-Dooba-he-yaro" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
//     {songName: "Hook-up-tu-Karlena" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
//     {songName: "Meri-zindagi-Sawari" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
//     {songName: "Nazm-Nazm-sa-mere" , filePath: "songs/9.mp3" , coverPath: "covers/9.jpg"},

// ]

// songItems.forEach((element, i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// //Handle play/pause click
// masterPlay.addEventListener('click' , ()=>{
//     if(audioElement.paused || audioElement.currentTime <=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//         gif.style.opacity=1;
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause');
//         masterPlay.classList.add('fa-play');
//         gif.style.opacity=0;

//     }
// })

// //Listen to Events
// audioElement.addEventListener('timeupdate' , ()=>{
//     //update seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change' , ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause');
//         element.classList.add('fa-play');

//     })
// }

// // let audioElement1 = new Audio(`songs/${songIndex+1}.mp3`);
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();

//         songIndex = parseInt(e.target.id);
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         audioElement.currentTime =0;

//         audioElement.play();
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause');
//         gif.style.opacity=1;

//         // if(audioElement1.paused){
//         // audioElement1.play();
//         // e.target.classList.remove('fa-play');
//         // e.target.classList.add('fa-pause');
//         // gif.style.opacity=1;
//         // masterPlay.classList.remove('fa-play');
//         // masterPlay.classList.add('fa-pause');
//         // }
//         // else{
//         //     audioElement1.pause();
//         //     e.target.classList.remove('fa-pause');
//         //     e.target.classList.add('fa-play');
//         //     gif.style.opacity=0;
//         //     masterPlay.classList.remove('fa-pause');
//         //     masterPlay.classList.add('fa-play');
//         // }


//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');


//     })
// })
// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');



// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     } 
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play');
//     masterPlay.classList.add('fa-pause');
// })










console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Para-dise-High-Swag", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Girl-I-need-you", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Only-Music-Sound", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "High-Sound-Beats", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "I-will-fly", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Sooraj-Dooba-he-yaro", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Hook-up-tu-Karlena", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Meri-zindagi-Sawari", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Nazm-Nazm-sa-mere", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click on master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
        // Update the songItemPlay button of the current song to fa-pause
        document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play');
        document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
        // Update the songItemPlay button of the current song to fa-play
        document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-pause');
        document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-play');
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Pause all other songs and reset their buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        // Check if the clicked song is already playing
        if (audioElement.src === songs[i].filePath && !audioElement.paused) {
            // If the song is already playing, pause it
            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            gif.style.opacity = 0;
        } else {
            // Otherwise, play the clicked song
            makeAllPlays();  // Pause all other songs
            songIndex = i;  // Update song index to the clicked song
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0;

            audioElement.play();
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            gif.style.opacity = 1;

            // Update the master play button to show pause
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
    });
});






// Handle next song button
document.getElementById('next').addEventListener('click', () => {
    // Remove the fa-pause class and add fa-play to the current songItemPlay button
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-pause');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-play');

    // Move to the next song
    songIndex = (songIndex + 1) % songs.length;

    // Update the audio source, song name, and reset the time
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;

    // Play the new song
    audioElement.play();

    // Update the master play button to show pause
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    // Update the songItemPlay button for the new song
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause');
});



// Handle previous song button
document.getElementById('previous').addEventListener('click', () => {
    // Remove the fa-pause class and add fa-play to the current songItemPlay button
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-pause');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-play');

    // Move to the previous song
    songIndex = (songIndex - 1 + songs.length) % songs.length;

    // Update the audio source, song name, and reset the time
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;

    // Play the new song
    audioElement.play();

    // Update the master play button to show pause
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    // Update the songItemPlay button for the new song
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause');
});


console.log("Welcome to D20CLUB");
let songIndex=0;
let audioElement=new Audio('songs/1.mpeg');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[{songName: "Wario-Mortals",filePath: "songs/1.mpeg",coverPath: "cover1.jfif"},
{songName: "In the End",filePath: "songs/2.mpeg",coverPath: "cover2.jfif"},
{songName: "Titanic Instrumental",filePath: "songs/3.mpeg",coverPath: "cover3.jfif"},
{songName: "Caller Tune",filePath: "songs/4.mpeg",coverPath: "cover4.jfif"},
{songName: "Instrumental",filePath: "songs/3.mpeg",coverPath: "cover5.jfif"},
{songName: "In the End",filePath: "songs/1.mpeg",coverPath: "cover6.jfif"}

]
songItems.forEach((element,i)=>{
    //console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
//handel play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}
    else{
        audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    }
})
//listentoevents
audioElement.addEventListener('timeupdate', ()=>{
   // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   //console.log(progress);
   myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       // console.log(e.target);
        makeAllplays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mpeg`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;

    }
else{
    songIndex+=1;
}
audioElement.src = `songs/${songIndex+1}.mpeg`;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;

    }
else{
    songIndex-=1;
}
audioElement.src = `songs/${songIndex+1}.mpeg`;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})

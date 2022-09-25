console.log("Welcome to Glorious Recitation")
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('surah/fatiha.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let masterSongPlay =document.getElementById('masterSongPlay')
let songItems = Array.from(document.getElementsByClassName('songItem'));
var navigation = document.getElementById('sideID');
// let songItemPlay = document.getElementsByClassName('songItemplay') //MyEdit

let songs = [
    {songName: "Surah-Fatiha",filePath:"surah/fatiha.mp3"},
    {songName: "Surah-baqrah(last 2 ayah)",filePath:"surah/rasoolu.mp3"},
    {songName: "Surah-imran (last 10 ayah)",filePath:"surah/imran.mp3"},
    {songName: "Surah-kahf",filePath:"surah/kahf.mp3"},
    {songName: "Surah-mulk",filePath:"surah/mulk.mp3"},
    {songName: "Surah-ikhlas",filePath:"surah/ikhlas.mp3"},
    {songName: "Surah-falak",filePath:"surah/falak.mp3"},
    {songName: "Surah-nas",filePath:"surah/nas.mp3"},
    {songName: "Ayat-al-kursi",filePath:"surah/kursi.mp3"},
    {songName: "Surah-rahman",filePath:"surah/rahman.mp3"},

]
songItems.forEach((element, i)=>{
    
    element.getElementsByClassName("name")[0].innerText = songs[i].songName;
})



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        
    }
})
// Listen to events

audioElement.addEventListener('timeupdate',()=>{

    // Update seeekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `surah/${songIndex+1}.mp3`
        masterSongPlay.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        

        
       

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `surah/${songIndex+1}.mp3`
        masterSongPlay.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `surah/${songIndex+1}.mp3`
        masterSongPlay.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
       
    
})

//side navigation

navigation.style.right ="-250px";

function openFunction(){
    document.getElementById("sideID").style.right="0";
    document.getElementById("menuicon").style.display ="none";
    document.getElementById("closeicon").style.display ="inline";
    
}
function closeFunction(){
    document.getElementById("sideID").style.right="-250px";
    document.getElementById("menuicon").style.display ="inline";
    document.getElementById("closeicon").style.display ="none";

}

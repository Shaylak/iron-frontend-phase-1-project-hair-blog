

document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
}

/*document.getElementById("btn").addEventListener("delete", myFunction);
function myFunction() {
    alert("Comment Deleted")
}*/

document.getElementById('button').addEventListener('click', myFunction2);
function myFunction2() {
    alert("Post Deleted")
};




function fetchVideos() {
    fetch("url")
      .then((response) => response.API_KEY())
      .then((renderVideo) => console.log(fetchVideos));
  
     return renderVideos;
    };

import YTSearch from 'youtube-api-searc';

const API_KEY = Process.env.REACT_APP_API_KEY_YT

videoSearch = (term) => {
    YTSearch( {key: API_KEY, term:term}, (videos) => {

console.log(videos)
    })
}

/*const player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '240',
width: '640',
videoId: 'M7lc1UVf-VE',
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}
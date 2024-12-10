var oVideo = document.getElementById("myVideo");
var oBack = document.getElementById("back");
var oPlay = document.getElementById("play");
var oGo = document.getElementById("go");
var oVol = document.getElementById("vol");
var oProgress = document.getElementById("progress");



oPlay.onclick = function() {

	if (oVideo.paused == true) {
		oVideo.play();

		oPlay.src = "img/video_pause_64.png";

		oPlay.title = "暂停";

	} else {
		oVideo.pause();
		oPlay.src = "img/video_play_64.png";
		oPlay.title = "播放";
	}

}
// 快进 5s
oGo.onclick = function() {
	oVideo.currentTime = oVideo.currentTime + 5;

}

oBack.onclick = function() {
	oVideo.currentTime -= 5;
}

oVol.onchange = function() {
	// alert(oVol.value); 
	oVideo.volume = oVol.value;

}

function show() {

	oProgress.value = oProgress.max * oVideo.currentTime / oVideo.duration;
}

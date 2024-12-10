// 1. 获取元素

var oVideo = document.getElementById("myVideo");
var oPlay = document.getElementById("play");
var oGo = document.getElementById("go");
var oBack = document.getElementById("back");
var oAdd = document.getElementById("add");
var oCut = document.getElementById("cut");
var oStop = document.getElementById("stop");
// 2.加事件 暂停和播放

oPlay.onclick = function() {

	if (myVideo.paused == true) {
		myVideo.play();
		// 文字暂停
		oPlay.innerHTML = "<i>暂停</i>";

	} else {
		myVideo.pause();
		// 文字播放
		oPlay.innerHTML = "播放";
	}

}
// 快进 5s
oGo.onclick = function() {
	oVideo.currentTime = oVideo.currentTime + 5;

}

oBack.onclick = function() {
	oVideo.currentTime -= 5;
}
//音量加 0.1
oAdd.onclick = function() {
	oVideo.volume += 0.1;
}

oCut.onclick = function() {
	oVideo.volume -= 0.1;
}

// oStop.onclick = function() {

// 	if (oVideo.volume > 0) {
// 		oVideo.volume = 0;
// 		oStop.innerHTML = "<i>声音</i>";

// 	} else {
// 		oVideo.volume = 1;

// 		oStop.innerHTML = "静音";
// 	}


// }

// oVideo.onclick = function() {
// 	oVideo.muted = true;
// }

oStop.onclick = function() {
	if (oVideo.muted == false) {
		oVideo.muted = true;
		oStop.innerHTML = "<i>声音</i>";
	} else {
		oVideo.muted = false;
		oStop.innerHTML = "静音";
	}
}

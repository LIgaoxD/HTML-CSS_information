var oAudio = document.getElementById("myaudio");
var oPlay = document.getElementById("play");
var oVol = document.getElementById("vol");




oPlay.onclick = function() {

	if (oAudio.paused == true) {
		oAudio.play();
		oPlay.title = '暂停';
		oPlay.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
	} else {
		oAudio.pause();
		oPlay.title = '播放';
		oPlay.innerHTML = '<i class="fa fa-play fa-3x"></i>';
	}

}

oVol.onchange = function() {
	oAudio.volume = oVol.value;
}

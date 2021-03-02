var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function togglePlayPause() {

 //paused→ビデオが止まっているときにtrueを返す
 //className→でクラスの名前を変更することでボタンのIconの画像変更のCSSを指定している

  if(video.paused) {              //pausedがtrue(ビデオが停止の状態の時)          
    btn.className = 'pause';      //btnのクラス名(buttonタグの場所)をpauseに変える
    video.play();                 //再生する
  } else {                        //pausedがfalse(ビデオが再生している時)
    btn.className ='play';        //pausedがfalseの時、
    video.pause();                //停止する
  }
}

btn.onclick = function() {
  togglePlayPause();
};

video.addEventListener('timeupdate', function() {
  var juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";               //orange-juiceにstyleタグを追加して長さを入力する
});
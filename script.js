AOS.init();

var musik = "Cintanya Aku Eng.mp3";

var Audio = document.querySelector(".audio");
if (musik) {
  Audio.src = musik;
}

function Start() {
    Audio.play();
    window.scrollTo(0, 0);
    document.querySelector(".open").style = "opacity: 0;";
    document.querySelector(".body").style = "overflow-y; scroll";
    setTimeout(function () {
    document.querySelector(".open").style.display = "none";
    }, 1200);
  }
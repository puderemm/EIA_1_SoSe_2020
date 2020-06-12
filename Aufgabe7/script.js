window.addEventListener('load', function () {
    //Aufgabe 7.1//
    var sounds = [];
    sounds.push(new Audio('Sound/A.mp3'));
    sounds.push(new Audio('Sound/C.mp3'));
    sounds.push(new Audio('Sound/F.mp3'));
    sounds.push(new Audio('Sound/G.mp3'));
    sounds.push(new Audio('Sound/hihat.mp3'));
    sounds.push(new Audio('Sound/kick.mp3'));
    sounds.push(new Audio('Sound/laugh-1.mp3'));
    sounds.push(new Audio('Sound/laugh-2.mp3'));
    sounds.push(new Audio('Sound/snare.mp3'));
    function playSample(samplenumber) {
        sounds[samplenumber].play();
    }
    document.querySelector("#Sound-A").addEventListener('click', function () { playSample(0); });
    document.querySelector("#Sound-C").addEventListener('click', function () { playSample(1); });
    document.querySelector("#Sound-F").addEventListener('click', function () { playSample(2); });
    document.querySelector("#Sound-G").addEventListener('click', function () { playSample(3); });
    document.querySelector("#Sound-hihat").addEventListener('click', function () { playSample(4); });
    document.querySelector("#Sound-kick").addEventListener('click', function () { playSample(5); });
    document.querySelector("#Sound-laugh1").addEventListener('click', function () { playSample(6); });
    document.querySelector("#Sound-laugh2").addEventListener('click', function () { playSample(7); });
    document.querySelector("#Sound-snare").addEventListener('click', function () { playSample(8); });
    //Aufgabe 7.2 inspiriert von Annette//
    function Beat() {
        setInterval(function () {
            playSample(4);
            playSample(5);
            playSample(8);
        }, 450);
    }
    document.querySelector("img").addEventListener('click', Beat);
});
//# sourceMappingURL=script.js.map
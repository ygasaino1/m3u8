let v_container = document.querySelector('#vid-container');
let v = null;

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    sPageURL = decodeURI(sPageURL); // Testing Phase <----------------------------- Testing Phase
    var sURLVariables = sPageURL.split('[&]');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('[=]');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

let url = GetURLParameter('url');
let html = `<video id="vid" preload="auto" class="vjs-default-skin" autoplay><source src=${url} ></video>`; //type="application/x-mpegURL"
v = htmlToElement(html);
console.log(v);
v_container.appendChild(v);

var options = {};
var player = videojs(v, options, function onPlayerReady() {
    videojs.log('Your player is ready!');

    // In this context, `this` is the player that was created by Video.js.
    this.play();

    // How about an event listener?
    this.on('ended', function() {
        videojs.log('Awww...over so soon?!');
        document.querySelector('#text').textContent = 'THE END';
        v.remove();
    });

    var time = GetURLParameter('time');
    if (time != undefined) {
        //document.getElementById('vid').currentTime = time;
        player.currentTime(time);
    }
});
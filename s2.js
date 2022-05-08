// let result = null;
// let blob_ = null;
// let blob_url = null;
// let obj_url = null;
// let v_container = document.querySelector('#vid-container');

// function GetURLParameter(sParam) {
//     var sPageURL = window.location.search.substring(1);
//     sPageURL = decodeURI(sPageURL); // Testing Phase <----------------------------- Testing Phase
//     var sURLVariables = sPageURL.split('[&]');
//     for (var i = 0; i < sURLVariables.length; i++) {
//         var sParameterName = sURLVariables[i].split('[=]');
//         if (sParameterName[0] == sParam) {
//             return sParameterName[1];
//         }
//     }
// }
// let url = GetURLParameter('url');

// let v = null;

// function fetchVideoAndPlay() {
//     fetch(url)
//         .then(res => {
//             console.log(res);
//             result = res;
//             res.blob().then(blob => {
//                 blob_url = URL.createObjectURL(blob)
//                 console.log(blob_url);
//             })
//         })
// .then(res => {
//     console.log(res);
//     blob_ = res
// obj_url = URL.createObjectURL(res);
// blob_url = URL.createObjectURL(blob_);
// console.log('1');
// let html = `<video id="vid" preload="auto" class="vjs-default-skin" autoplay><source src=${blob_url} type="${blob.type}"></video>`;
// let v = htmlToElement(html);
// console.log(v);
// v_container.appendChild(v);
// let s1 = document.createElement('script');
// s1.src = 'video.js';
// console.log(s1);
// v_container.appendChild(s1);
// let s2 = document.createElement('script');
// s2.src = 'videojs-http-streaming.js';
// console.log(s2);
// v_container.appendChild(s2);

// var options = {};
// var player = videojs(v, options, function onPlayerReady() {
//     videojs.log('Your player is ready!');

//     // In this context, `this` is the player that was created by Video.js.
//     this.play();

//     // How about an event listener?
//     this.on('ended', function() {
//         videojs.log('Awww...over so soon?!');
//     });
// });

// player.src({ type: blob.type, src: blob_url });
// player.play().then(() => {
//     console.log('beep');
// })
// })
//     .catch(err => { console.log(err); })
// }
// fetchVideoAndPlay();
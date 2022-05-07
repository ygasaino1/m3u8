// let video_link = 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6305339580001/d0a435fe-b00d-4365-a917-57d95d9ad2f6/f3fb8415-3112-414b-9dd1-804d188d6a41/6s/rendition.m3u8?fastly_token=NjI3NmY4MjRfNWVmNjU5NTkwNGI1NjBjMWYzYzQxY2ZlMGIwZmM5ZDE1OTMyNmFiMzc1OTZiYzk0MjIzMGUxNDEyYzkzMzVkZg%3D%3D';

// const video_elem = document.querySelector('#vid_html5_api');
// player.src({ type: "application/x-mpegURL", src: video_link });

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

var url = GetURLParameter('url');
player.src({ type: "application/x-mpegURL", src: url });
player.play();

var time = GetURLParameter('time');
if (time != undefined) {
    //document.getElementById('vid').currentTime = time;
    player.currentTime(time);
}
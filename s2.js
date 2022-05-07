// let blob = null;
// let blob_url = null;
// let v = document.querySelector('video');

// function fetchVideoAndPlay() {
//     fetch('https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6305339580001/d0a435fe-b00d-4365-a917-57d95d9ad2f6/f3fb8415-3112-414b-9dd1-804d188d6a41/6s/rendition.m3u8?fastly_token=NjI3NmY4MjRfNWVmNjU5NTkwNGI1NjBjMWYzYzQxY2ZlMGIwZmM5ZDE1OTMyNmFiMzc1OTZiYzk0MjIzMGUxNDEyYzkzMzVkZg%3D%3D')
//         .then(response => response.blob())
//         .then(blob_ => {
//             blob = blob_
//             blob_url = URL.createObjectURL(blob_);
//             player.src({ type: blob.type, src: blob_url });
//             player.play().then(() => {
//                 console.log('beep');
//             })
//         })
// }
// fetchVideoAndPlay();
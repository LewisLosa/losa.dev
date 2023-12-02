var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '1440',
        width: '2560',
        videoId: 'dByHeKrQmq8',
        playerVars: {
            'autoplay': 1,
            'showinfo': 0,
            'controls': 0,
            'loop': 1,
            'iv_load_policy': 3
        }
    });
}

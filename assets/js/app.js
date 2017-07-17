


$(".img-responsive").on("click", function() {
    var vimeoLink = $(this).attr("id");
    $('#video').attr('src','//player.vimeo.com/video/'+ vimeoLink +'?api=1&player_id=vimeoplayer&title=0&amp;byline=0&amp;portrait=0');
});

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

$('.modal').on('hidden.bs.modal', function () {
    player.pause();
});

$('.modal').on('shown.bs.modal', function () {
    player.play();
});
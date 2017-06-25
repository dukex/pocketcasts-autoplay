(function(){
  var audio = document.querySelector('audio');

  audio && audio.addEventListener('abort', function() {
    var episodes = document.querySelectorAll('.episode_row:not(.episode_played) .episode_button:not(.playing)');
    var nextEpisode = episodes[0];
    console.log("playing next episode");
    nextEpisode.click();
  });
}());

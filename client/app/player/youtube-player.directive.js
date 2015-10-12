'use strict';

angular.module('simplePlayerApp')
  .directive('youtubePlayer', function ($sce, YoutubeService) {
    return {
      templateUrl: 'app/player/youtube-player.html',
      restrict: 'E',
      scope:{
        video: '='
      },
      link: function (scope, element, attrs) {
        scope.show = false;
        scope.$watch('video', function(track, oldValue){
          if(track){
            _play(track);
          }
        });

        scope.trustSrc = function(src) {
          console.log($sce.trustAsResourceUrl(src));
          return $sce.trustAsResourceUrl(src);
        };


        function _play(track){
          YoutubeService.search(track).then(function(data){
            var video = data[0];
            scope.show = true;
            scope.src = 'https://www.youtube.com/embed/' + video.id.videoId + '?autoplay=1';
          });
        };
      }
    };
  });
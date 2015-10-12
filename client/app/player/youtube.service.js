'use strict';

angular.module('simplePlayerApp')
  .service('YoutubeService', function ($http, YOUTUBE_KEY) {
    function search(query){
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_KEY,
          type: 'video',
          maxResults: '3',
          part: 'id,snippet',
          fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
          q: query
        }
      }).then(function(data){
        return data.data.items;
      });
    }


    return{
      search: search
    }
  });

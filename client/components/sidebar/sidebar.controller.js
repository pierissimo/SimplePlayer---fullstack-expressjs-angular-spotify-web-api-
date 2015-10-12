'use strict';

angular.module('simplePlayerApp')
  .controller('SidebarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Search',
      'link': '/'
    },
    {
      'title': 'Favourite Artists',
      'link': '/artists'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
'use strict';

angular.module('simplePlayerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .run(function(StorageService, localStorageService){
    var isFirstRun = localStorageService.get('not-first-time');
    
    if(!isFirstRun){
      StorageService.addFavourite('6mdiAmATAx73kdxrNrnlao');
      localStorageService.set('not-first-time', true);
    }
  });

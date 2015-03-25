
(function (){

'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('trackerApp', ['ngRoute','ngClipboard','ngResource']);

 app.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("./bower_components/zeroclipboard/dist/ZeroClipboard.swf");
  }]);



})();
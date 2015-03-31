//Controller for the Notes Tab
(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var NotesTabController = function ($scope, $http) {
        
        $scope.notesTabText="";
        
        
        
        //Read data from exampleNotes
        $http.get('exampleNotes').success(function (data) {

            //Store data to the scope object
             $scope.notesTabText = data;

          
        });
        
        
          $scope.clearNotesTab = function () {

           

             $scope.notesTabText = "";


        };
    };
    
     app.controller('NotesTabController', NotesTabController);


})();
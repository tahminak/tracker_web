/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");


    app.factory('ReadResourceService', function ($http,$log,$q,$resource) {
          
          var deferred = $q.defer();
          
          var jsonFiles = [{
            "notesFile": "notes.json",
            "scriptFile": "scripts.json",
            "devicesFile": "devices.json"
        }];
        
      
         var resource= $resource('data/scripts.json');
         
         return{
             
             getData:function (){
                 
                 return $resource('data/:id',{id:'@id'}).query({id:'notes.json'});
             }
             
         }


        });



})();

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");


    app.factory('jsonFilesService', function () {
        var jsonFiles = {
            "notesFile": "notes.json",
            "scriptFile": "scripts.json",
            "devicesFile": "devices.json"
        };
        
        return jsonFiles;


    });



})();


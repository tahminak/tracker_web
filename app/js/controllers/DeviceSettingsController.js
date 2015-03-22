/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var DeviceSettingsController = function ($scope,$http,$log, ReadJasonService,FrenchParserService,jsonFilesService) {
        
        $scope.devices;
        $scope.isClicked = [true];
        $scope.deviceModelOrOs;
        $scope.issues;
        $scope.englishStepsTitle="Steps in English";
        $scope.frenchStepsTitle="Steps in French";
        
        
//        
//        ReadJasonService.readJason(jsonFilesService.notesFile).then(
//                function (data){ $scope.deviceSettingsObject=data;},
//                function (statusCode){console.log(statusCode);}
//                );
//        
//        
       /// console.log('It is in the console ! :'+jsonFilesService.notesFile)
       
       
       
       //Read data from scripts.json
        $http.get(jsonFilesService.devicesFile).success(function (data) {

            //Store t data to the scope object
            // $scope.notesList = data;
            
            $scope.devices = data;
            $scope.deviceModelOrOs=data[0].modeloros;
            $scope.issues=data[0].modeloros[0].issues;
           console.log($scope.devices);

            
        });
        
        
        
        
         $scope.getClass = function (index) {

            if ($scope.isClicked[index]) {


                return "btn btn-primary";
            }
            else {
                return "btn btn-danger";
            }


        }
        
        
        $scope.onClickDeviceTitle=function(index, $event,device,$element){
            
            
             $scope.deviceModelOrOs=$scope.devices[index].modeloros;
             $scope.issues=$scope.devices[index].modeloros[0].issues;
             $scope.issueTitles;
             
             
             $log.info($scope.deviceModelOrOs);
             $log.info($scope.issues);
             
            //Selected item is clicked
            $scope.isClicked[index] = true;

            //All other item is un selected
            for (var i = 0; i < $scope.isClicked.length; i++) {
                if (i != index)
                    $scope.isClicked[i] = false;

            }


            $scope.englishScript="";
            $scope.frenchScript="";
        }
        
        
        $scope.generateIssues=function (index){
            
            $log.info($scope.deviceModelOrOs[index])
            
            $scope.issues=$scope.deviceModelOrOs;
                    
             
            
        };
        
    };
    
    
    


    app.controller('DeviceSettingsController',DeviceSettingsController);


})();
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var DeviceSettingsController = function ($scope, $http, $log, ReadFileService, FrenchParserService, jsonFilesService) {

        $scope.devices;
        $scope.isClicked = [true];
        $scope.deviceModelOrOs;
        $scope.issues;
        $scope.englishStepsTitle = "Steps in English";
        $scope.frenchStepsTitle = "Steps in French";




        //Read Json object using ReadJason service
        ReadFileService.readJason(jsonFilesService.devicesFile).then(
                function (data) {
                    $scope.devices = data;
                    $scope.deviceModelOrOs = $scope.devices[0].modeloros;
                    $scope.issues = $scope.deviceModelOrOs[0].issues;
                },
                function (statusCode) {
                    console.log(statusCode);
                }
        );


        $scope.getClass = function (index) {

            if ($scope.isClicked[index]) {


                return "btn btn-primary";
            }
            else {
                return "btn btn-danger";
            }


        }


        $scope.onClickDeviceTitle = function (index, $event, device, $element) {


            $scope.deviceModelOrOs = $scope.devices[index].modeloros;
            $scope.issues = $scope.devices[index].modeloros[0].issues;
            $scope.issueTitles;
            $scope.selectedModel = true;

            $log.info($scope.deviceModelOrOs);
            $log.info($scope.issues);

            console.log(index);

            //Selected item is clicked
            $scope.isClicked[index] = true;

            //All other item is un selected
            for (var i = 0; i < $scope.isClicked.length; i++) {
                if (i != index)
                    $scope.isClicked[i] = false;

            }


            $scope.englishStepsTitle = "";
            $scope.frenchStepsTitle = "";
            $scope.englishSteps = "";
            $scope.frenchSteps = "";

        }


        $scope.generateIssues = function (index) {



            // $scope.issueTitles=
            $scope.issues = $scope.selectedModelorOs.issues;

            $log.info($scope.issues);


        };

        $scope.getIssues = function () {

            return $scope.issues;
        }
        $scope.generateSteps = function (index) {

            $scope.englishStepsTitle = $scope.selectedIssue.steps[0].steptitle;
            $scope.frenchStepsTitle = $scope.selectedIssue.steps[1].steptitle;
            $scope.englishSteps = $scope.selectedIssue.steps[0].step;
            $scope.frenchSteps = FrenchParserService.parse($scope.selectedIssue.steps[1].step);


        }


    };





    app.controller('DeviceSettingsController', DeviceSettingsController);


})();
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var ChatPerHourController = function ($scope,$log, $http,ReadJasonService,jsonFilesService) {
  
    $scope.today=new Date();
    $scope.yesterday=new Date($scope.today);
    $scope.yesterday=$scope.yesterday.setDate($scope.today.getDate()-1);
    $scope.dayBeforeYesterday=new Date($scope.yesterday);
    $scope.dayBeforeYesterday= $scope.dayBeforeYesterday.setDate($scope.today.getDate()-2);
    
    $scope.todayLogIntime="7:48";
    $scope.yestedayLoginTime="7:09";
    $scope.dayBeforeYesterdayLogintime="7:03";
  
  
      
    $scope.todaySession="63";
    $scope.yestedaySession="76";
    $scope.dayBeforeYesterdaySession="56";
    
     $scope.todayCPH="8:08";
    $scope.yestedayCPH="9:04";
    $scope.dayBeforeYesterdayCPH="7:30";
  
  
    
    };
    

    app.controller('ChatPerHourController', ChatPerHourController);


})();
    
    
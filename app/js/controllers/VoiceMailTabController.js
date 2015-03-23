/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var VoiceMailTabController = function ($scope, $http,ReadJasonService,jsonFilesService) {
    
    $scope.vmBox= [
        {
            "boxNo":"200",
            "boxDesc":"Box_200(+1-416-822-1142)",
            "retNo":"+1-904-566-1188",
            "retNoCopy":"+19045661188"
        },
        {
            "boxNo":"202",
            "boxDesc":"Box_202(+1-214-822-0000)",
            "retNo":"+1-904-566-0000",
            "retNoCopy":"+19045660000"
        },
        {
            "boxNo":"203",
            "boxDesc":"Box_203(+1-123-456-7890)",
            "retNo":"+1-904-566-1188",
            "retNoCopy":"+19123341234"
        }
    ];
        
    
    
    };
    

    app.controller('VoiceMailTabController', VoiceMailTabController);


})();
    
    
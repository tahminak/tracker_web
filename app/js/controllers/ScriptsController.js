

//Conrtoller of the Scripts Tab
(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var scriptsController = function ($scope, $http,FrenchParserService,ReadFileService,jsonFilesService) {


        $scope.isClicked = [true];

        $scope.scripts={};
        $scope.scriptsTitles;
        $scope.englishScriptTitle = "English Script";
        $scope.frenchScriptTitle = "French Script";
        $scope.initData;
        
        
        //Read Json file using ReadFile Service
        ReadFileService.readJason(jsonFilesService.scriptFile).then(
                function (data){ $scope.initData=data;
                                  $scope.scripts=$scope.initData.scripts;
                                  $scope.scriptsTitles = $scope.scripts[0].submenus;
                                  },
                function (statusCode){console.log(statusCode);}
                );
        
        
        $scope.selectedScript=$scope.scripts[0];

       $scope.getScriptsTitles = function () {



            return $scope.scriptsTitles;

        };
        $scope.onClickScriptTitle = function (index, $event, script, $element) {

            $scope.scriptsTitles = $scope.scripts[index].submenus;


            console.log(script);

            //Selected item is clicked
            $scope.isClicked[index] = true;

            //All other item is un selected
            for (var i = 0; i < $scope.isClicked.length; i++) {
                if (i != index)
                    $scope.isClicked[i] = false;

            }


            $scope.englishScript="";
            $scope.frenchScript="";
            //console.log(index +" Lenght of the array is "+$scope.isClicked.length);



        };

        

        $scope.getClass = function (index) {

            if ($scope.isClicked[index]) {


                return "btn btn-primary";
            }
            else {
                return "btn btn-danger";
            }


        }
        $scope.generateScript = function () {

            $scope.englishScriptTitle = $scope.selectedScript.submenusripts[0].scripttitle;
            $scope.frenchScriptTitle = $scope.selectedScript.submenusripts[1].scripttitle;
            $scope.englishScript = $scope.selectedScript.submenusripts[0].script;
            $scope.frenchScript = FrenchParserService.parse($scope.selectedScript.submenusripts[1].script);
            console.log($scope.selectedScript.submenusripts[0]);

        };

       

    };


    app.controller('scriptsController', scriptsController);


})();
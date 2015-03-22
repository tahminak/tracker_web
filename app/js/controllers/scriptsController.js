/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var scriptsController = function ($scope, $http,FrenchParserService,ReadJasonService,jsonFilesService) {


        $scope.isClicked = [true];

        $scope.scripts = [];
        $scope.scriptsTitles;
        $scope.englishScriptTitle = "English Script";
        $scope.frenchScriptTitle = "French Script";


        // console.log("In Script controller! : "+jsonFilesService.scriptFile);


        //Read data from scripts.json
        $http.get('scripts.json').success(function (data) {

            //Store t data to the scope object
            // $scope.notesList = data;
            $scope.scripts = data.scripts;
            // console.log($scope.scripts);

            $scope.scriptsTitles = $scope.scripts[0].submenus;
        });
//        
        //Read Json object using ReadJason service
//        ReadJasonService.readJason(jsonFilesService.scriptFile).then(
//                function (data){ 
//                    console.log("In Scripts controller :"+data);
//                    $scope.scripts=data;
//                   
//                  
//                },
//                function (statusCode){console.log(statusCode);}
//                );
        
       //console.log('Test');
       
       $scope.getScriptsTitles = function () {



            return $scope.scriptsTitles;

        };
        $scope.onClickScriptTitle = function (index, $event, script, $element) {

            $scope.scriptsTitles = $scope.scripts[index].submenus;


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

            $scope.englishScriptTitle = $scope.selectedValue.submenusripts[0].scripttitle;
            $scope.frenchScriptTitle = $scope.selectedValue.submenusripts[1].scripttitle;
            $scope.englishScript = $scope.selectedValue.submenusripts[0].script;
            $scope.frenchScript = FrenchParserService.parse($scope.selectedValue.submenusripts[1].script);
            console.log($scope.selectedValue.submenusripts[0]);

        };

       

    };


    app.controller('scriptsController', scriptsController);


})();
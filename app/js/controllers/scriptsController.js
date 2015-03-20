/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var scriptsController = function ($scope, $http) {


        $scope.isClicked = [true];

        $scope.scripts = [];
        $scope.scriptsTitles;
        $scope.englishScriptTitle = "English Script";
        $scope.frenchScriptTitle = "French Script";


        //  console.log("In Script controller!");


        //Read data from scripts.json
        $http.get('scripts.json').success(function (data) {

            //Store t data to the scope object
            // $scope.notesList = data;
            $scope.scripts = data.scripts;
            // console.log($scope.scripts);

            $scope.scriptsTitles = $scope.scripts[0].submenus;
        });

        $scope.onClickScriptTitle = function (index, $event, script, $element) {

            $scope.scriptsTitles = $scope.scripts[index].submenus;


            //Selected item is clicked
            $scope.isClicked[index] = true;

            //All other item is un selected
            for (var i = 0; i < $scope.isClicked.length; i++) {
                if (i != index)
                    $scope.isClicked[i] = false;

            }



            //console.log(index +" Lenght of the array is "+$scope.isClicked.length);



        };

        $scope.getScriptsTitles = function () {



            return $scope.scriptsTitles;

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
            $scope.frenchScript = decodeToAcutesHTML($scope.selectedValue.submenusripts[1].script);
            console.log($scope.selectedValue.submenusripts[0]);

        };

        var decodeToAcutesHTML = function (str) {
            str = str.replace(/&#192;/g, "À");
            str = str.replace(/&#224;/g, "à");
            str = str.replace(/&#194;/g, "Â");
            str = str.replace(/&#226;/g, "â");
            str = str.replace(/&#230;/g, "æ");
            str = str.replace(/&#199;/g, "Ç");
            str = str.replace(/&#231;/g, "ç");
            str = str.replace(/&#200;/g, "È");
            str = str.replace(/&#201;/g, "É");
            str = str.replace(/&#233;/g, "é");
            str = str.replace(/&#202;/g, "Ê");
            str = str.replace(/&#234;/g, "ê");
            str = str.replace(/&#203;/g, "Ë");
            str = str.replace(/&#235;/g, "ë");
            str = str.replace(/&#206;/g, "Î");
            str = str.replace(/&#238;/g, "î");
            str = str.replace(/&#207;/g, "Ï");
            str = str.replace(/&#239;/g, "ï");
            str = str.replace(/&#212;/g, "Ô");
            str = str.replace(/&#244;/g, "ô");
            str = str.replace(/&#140;/g, "Œ");
            str = str.replace(/&#156;/g, "œ");
            str = str.replace(/&#217;/g, "Ù");
            str = str.replace(/&#249;/g, "ù");
            str = str.replace(/&#219;/g, "Û");
            str = str.replace(/&#251;/g, "û");
            str = str.replace(/&#220;/g, "Ü");
            str = str.replace(/&#252;/, "ü");
            str = str.replace(/&#171;/g, "«");
            str = str.replace(/&#128;/g, "€");
            str = str.replace(/&#8355;/g, "₣");

            str = str.replace(/&#232;/g, "è");
            str = str.replace(/&#8217;/g, "’");

            return str;


        }

    };


    app.controller('scriptsController', scriptsController);


})();
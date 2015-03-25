/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var NotesController = function ($scope, $http,ReadFileService,jsonFilesService,ReadResourceService) {
        
        $scope.repeatCount=[0,1,2,3,4,5];

    
        $scope.cxname = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        var defaultCxname = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        $scope.noteTextAreas = ['', '', '', '', '', ''];
        $scope.textInput=['','','','','',''];
        $scope.textLabel=['CTN:','CTN:','CTN:','CTN:','CTN:','CTN:'];

        var customerInfo = "";
        var deviceInfo = "";

        var initialTextArea = "Please copy the example notes provided in notes tab , paste here and press F5 to format the text"+
                               "\n\nOnce you have formatted Cx info ,press ESC to get customer name and phone number. Press F1 to get IMEI";
        for (var i = 0; i < 6; i++) {
            $scope.noteTextAreas[i] = initialTextArea;
        }

        
      

        
        //Read Json object using ReadJason service
        ReadFileService.readJason(jsonFilesService.notesFile).then(
                function (data){ $scope.notesList=data;
             //   console.log(" In Notes Controller : "+"reading "+jsonFilesService.notesFile+" \n"+data)
             },
                function (statusCode){console.log(statusCode);}
                );
        
        

        $scope.testRes=ReadResourceService.getData();
        
        console.log($scope.testRes);

        $scope.addNotes = function (index) {

            // console.log("Clicking Notes : "+$scope.selectedNote.id);
            $scope.noteTextAreas[index] += "\n" + $scope.notesList[$scope.selectedNote.id].notes;
        };

        $scope.clearNotes = function (index) {

            // console.log("Clicked on clear "+index);

            $scope.noteTextAreas[index] = "";
            $scope.cxname[index]=defaultCxname[index];
            $scope.textInput[index]='';


        };


        $scope.formateNotes = function (keyPressed, index) {

            if (keyPressed.keyCode === 116) {


          
                customerInfo = getCustomerInfo(index);
                deviceInfo = getDeviceInfo(index);


                $scope.noteTextAreas[index] = customerInfo + deviceInfo;

            } else
            if (keyPressed.keyCode === 27) {



                //customerInfo=getCustomerInfo(index);
                // deviceInfo=getDeviceInfo(index);


                // $scope.noteTextAreas[index]=customerInfo+deviceInfo;



                $scope.cxname[index] = getCustomerName($scope.noteTextAreas[index]);
                $scope.textLabel[index]='CTN:';
                $scope.textInput[index]=getCTN($scope.noteTextAreas[index])
                
                //console.log("Esc key was pressed");

            }else if(keyPressed.keyCode === 112){
            
             $scope.textLabel[index]='IMEI:';
                $scope.textInput[index]=getIMEI($scope.noteTextAreas[index])
            
           // console.log("F1 is pressed!");
            }
        };


        //Search and return the session id from the notes
        function getSession(text) {

            return text.substring(text.search('Session ID:')).split('\n', 1)[0];

        }
        ;


        function getCTN(text) {

            var ctn=text.substring(text.search('CTN/Phone:')+10).split('\n', 1)[0];
            
            
            
            return ctn.replace(/\D/g,'');
        };

        function getCustomerName(text,index) {

            var name =defaultCxname[index];

            if (text.search('Customer Name/Nom du Client:') > 0) {

                name = text.substring(text.search('Customer Name/Nom du Client:') + 28).split('\n', 1)[0];
            }
            else
            if (text.search('Client Name:') > 0) {
                name = text.substring(text.search('Client Name:')+ 12).split('\n', 1)[0];
            } else
                name=defaultCxname[index];
        


            return name;

        };
       

        function getPostalcode(text) {


            return text.substring(text.search('Postal Code:')).split('\n', 1)[0];

        };
       

        function getChannel(text) {
            return text.substring(text.search('Channel:')).split('\n', 1)[0];

        }

        function getCustomerInfo(index) {

            return "Wireless Live Chat\n" + getSession($scope.noteTextAreas[index]) + "\n" + "Client Name: " + getCustomerName($scope.noteTextAreas[index])
                    + '\n' +'CTN/Phone: '+getCTN($scope.noteTextAreas[index]) + "\n" + getPostalcode($scope.noteTextAreas[index]) + '\n' + getChannel($scope.noteTextAreas[index])
                    + "\n-------------------------------------------------------\n";
        }

        function getDeviceInfo(index) {

            return getDevice($scope.noteTextAreas[index]) + "\n"
                    +'IMEI:'+ getIMEI($scope.noteTextAreas[index]) + "\n"
                    + getIMSI($scope.noteTextAreas[index]) + "\n"
                    + getAPNs($scope.noteTextAreas[index]) + "\n"
                    + "-------------------------------------------------------\n";
        }


        function getDevice(text) {
            return text.substring(text.search('Device:')).split('\n', 1)[0];

        }

        function getIMSI(text) {
            return text.substring(text.search('IMSI:')).split('\n', 1)[0];
        }

        function getIMEI(text) {
            return text.substring(text.search('IMEI:')+5).split('\n', 1)[0];
        }

        function getAPNs(text) {
            return text.substring(text.search('APNs:')).split('\n', 1)[0];
        }
    };




    app.controller('NotesController', NotesController);


})();
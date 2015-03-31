//Controller for the VoiceMail tab
(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");

    var VoiceMailTabController = function ($scope,$log, $http,ReadFileService,jsonFilesService) {
    $scope.selectedRetreivalNO="+1-000-000-0000";
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
    
    $scope.vmIosSteps=[{"name":"iOs 7.0",
                      "steps":"Can you please dial the following code on your device as is :\n"
                + " \n"
                + "    *5005*86*"  },
                    {"name":"iOs 6.0",
                      "steps":"Can you please dial the following code on your device as is :\n"
                + " \n"
                + "    *5005*86*" }
                ];
     $scope.vmAndroidSteps=[{"name":"4.x",
                      "steps": "Select the Phone icon.\n"
                + "Press the Menu button.\n"
                + "Select Call Settings.\n"
                + "Select Voicemail Settings.\n"
                + "Select Voicemail Number. Enter "  },
                    {"name":"2.x",
                      "steps":"Open Applications.\n"
                + "Select Settings.\n"
                + "Select Call Settings.\n"
                + "Select Voicemail Settings.\n"
                + "Select Voicemail Number.\n"
                + "Enter " },
                   {"name":"1.x",
                      "steps":"Go to Menu.\n"
                + "Choose Settings.\n"
                + "Select Call Settings.\n"
                + "Go to Voicemail.\n"
                + "Enter "}
                ];
        var retrievalNoArray=["+1-514-000-0000","+1-416-000-0000","+1-403-000-0000"];
        
        
        
        $scope.generateRetrievalNo=function (index){
            $scope.retrievalNo=retrievalNoArray[index];
            $scope.selectedRetreivalNO=$scope.selectedVmNode.retNoCopy;
      //      $log.info(selectedRetreivalNO);
            
        };
        
        $scope.generateIosText=function (){
            
           $scope.iOsVmSteps=$scope.iosVM.steps+$scope.selectedRetreivalNO + "# and then call" + "\nPlease enter  the asterisks, Number sign and the PLUS sign.\n"
                + "The  PLUS sign can be obtained if you press and hold down Zero";
        }
    
    
         $scope.generateAndroidStep=function (){
    
          $scope.androidSteps=$scope.andVmStep.steps+$scope.selectedRetreivalNO;
          
         }
    
    };
    

    app.controller('VoiceMailTabController', VoiceMailTabController);


})();
    
    
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */






(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");


    app.service('ReadFileService', function ($http,$log,$q) {
             //var deferred;

            this.readJason = function (file) {
                
                //declare deferred object
               var deferred=$q.defer();
                //Read data from Json file
                $http.get(file).success(function (data, status, headers, config) {

                  
                  deferred.resolve(data);
             
                    
                })
                .error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                       deferred.reject(status);
                        $log.warning(data,status,headers(),config);
                   
                   });

                return deferred.promise;

            }



        });



})();

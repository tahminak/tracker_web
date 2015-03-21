/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





(function () {
    'use strict';


    //Tracker App module
    var app = angular.module("trackerApp");
    
    
    app.service('FrenchParserService',function (){
        
        this.parse=function (str) {
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

        
    });
    
    
    
    })();
"use strict";

(function () {
    angular.module("guessTheNumber").controller("guessTheNumberController", function () {
        var vm = this;

        vm.initializeGame = function () {
            vm.noOfTries = 0;
            vm.original = Math.floor((Math.random() * 1000) + 1);
            vm.guess = null;
            vm.deviation = null;
        };

        vm.verifyGuess = function () {
            if (typeof (vm.guess) == "number") {
                vm.deviation = vm.original - vm.guess;
                ++vm.noOfTries;
            }            
        };
        vm.initializeGame();
    });
}())
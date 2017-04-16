/// <reference path="../angular.js" />
var myApp = angular.module("myModule", ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when("/Home",{
        templateUrl: "Templates/home",
        Controller: "myController"
    })
    .when("/About", {
        templateUrl: "Templates/about",
        Controller: "myController"
    })
    .when("/Contact", {
        templateUrl: "Templates/contact",
        Controller: "myController"
    })
});
// Sydney Flak
// sflak1@my.smccd.edu
// CIS 114 OL
// controllers.js
// Assignment #8
// 5/20/16

'use strict';

/* Controllers */

angular.module('listApp.controllers', [])
  .controller('listController', ['$scope', function($scope) {

  	$scope.searchFilter = null;

  	$scope.playerList = 
  	[
      {
          name: "Carli Lloyd",
          country: "USA",
          rating: "91",
          rank: "1"
      },
      {
          name: "Megan Rapinoe",
          country: "USA",
          rating: "90",
          rank: "2"
      },
      {
          name: "Abby Wambach",
          country: "USA",
          rating: "90",
          rank: "3"
      },
      {
          name: "Louisa Necib",
          country: "France",
          rating: "90",
          rank: "4"
      },
      {
          name: "Nadine Kessler",
          country: "Germany",
          rating: "89",
          rank: "5"
      },
      {
          name: "Christine Sinclair",
          country: "Canada",
          rating: "88",
          rank: "6"
      },
      {
          name: "Marta",
          country: "Brazil",
          rating: "88",
          rank: "7"
      },
      {
          name: "Hope Solo",
          country: "USA",
          rating: "87",
          rank: "8"
      },
      {
          name: "Lotta Schelin",
          country: "Sweden",
          rating: "87",
          rank: "9"
      },
      {
          name: "Becky Sauerbrunn",
          country: "USA",
          rating: "86",
          rank: "10"
      },
      {
          name: "Nadine Angerer",
          country: "Germany",
          rating: "86",
          rank: "11"
      },
      {
          name: "Dzsenifer Marozsan",
          country: "Hungary",
          rating: "86",
          rank: "12"
      },
            {
          name: "Celia Sasic",
          country: "Germany",
          rating: "85",
          rank: "13"
      },
      {
          name: "Christie Rampone",
          country: "USA",
          rating: "85",
          rank: "14"
      },
      {
          name: "Tobin Heath",
          country: "USA",
          rating: "85",
          rank: "15"
      },
      {
          name: "Alex Morgan",
          country: "USA",
          rating: "84",
          rank: "16"
      },
      {
          name: "Anja Mittag",
          country: "Germany",
          rating: "84",
          rank: "17"
      },
      {
          name: "Rosana",
          country: "Brazil",
          rating: "84",
          rank: "18"
      },
      {
          name: "Nilla Fischer",
          country: "Sweden",
          rating: "84",
          rank: "19"
      },
      {
          name: "Caaroline Seger",
          country: "Sweden",
          rating: "84",
          rank: "20"
      }

    ];

  }]);
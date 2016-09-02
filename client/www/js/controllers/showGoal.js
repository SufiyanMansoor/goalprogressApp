/**
 * Created by User on 9/1/2016.
 */
angular.module('starter.controllers')
  .controller('showGoalController', function ($scope, Data) {
    $scope.user = Data.getUser();

  })

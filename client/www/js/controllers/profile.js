/**
 * Created by User on 8/31/2016.
 */
angular.module('starter.controllers')
  .controller('profileController',function($scope,profileService, $state,$http, $timeout, Data){
    var url= "http://www.otago.ac.nz/itssdschedule/mobileappdevice/services/getUsers.php";
    var url= "users.json";
    $http.get(url).success( function(response) {
      Data.setUser(response);
      $scope.users = response;
    });




    $scope.submitGoal = function (user) {
      var data = {
        day: user.day,
        userGoal: user.Goal,
        userDescription: user.Description
      }
      console.log(data)
      profileService.profilein(data).then(function (response) {
          if (response) {
            $state.go('showGoal');
          }
          else {
            $state.go('profile');
          }
        }
      )
    }
  })

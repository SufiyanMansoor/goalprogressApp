/**
 * Created by User on 8/31/2016.
 */
angular.module('starter')
  .controller('profileController',function($scope,profileService, $state){
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

/**
 * Created by User on 8/31/2016.
 */
angular.module('starter.controllers')
.controller('signUpController',function($scope, authService, $ionicPopup, $state){
    $scope.signUp = function (user) {
      console.log(user);
       var data = {
          userFullName: user.fullName,
          userEmail: user.email,
          userPassword: user.password,
          userStatus: ""
         }
        console.log(data);
        authService.signUp(data).then(function (response) {
          if (response) {
            $state.go('login');
          }
          else {
            $state.go('signup');
          }
        }
        )
      }


  })

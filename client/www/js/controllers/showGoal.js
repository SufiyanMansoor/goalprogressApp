/**
 * Created by User on 9/1/2016.
 */
angular.module('starter.controllers')
  .controller('showGoalController', function ($scope, $http,IssuesService) {
      IssuesService.all()
          .then(function(resp) {
            console.log('Success', resp);
            $scope.issues = resp.data;
          }, function(err) {
            console.error('ERR', err);
            $scope.issues = err;
          });

  })

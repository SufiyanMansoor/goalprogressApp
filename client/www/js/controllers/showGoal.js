/**
 * Created by User on 9/1/2016.
 */
angular.module('starter')
  .controller('showGoalController', function ($scope, $http,IssuesService) {
    $scope.delete=function(id){
      $http.post('http://localhost:3000/deletegoal',{id: id}).then(function(resp) {
        console.log('Success', resp);


      }, function(err) {
        console.error('ERR', err);

      });
    }
    $scope.edit=function(id,day,userGoal,userDescription){
      $http.post('http://localhost:3000/editgoal',
        {
          id: id,
          day:day,
          userGoal:userGoal,
          userDescription:userDescription
        }
      ).then(function(resp) {
        console.log('Success', resp);


      }, function(err) {
        console.error('ERR', err);

      });
    }


    IssuesService.all()
          .then(function(resp) {
            console.log('Success', resp);
            $scope.issues = resp.data;
          }, function(err) {
            console.error('ERR', err);
            $scope.issues = err;
          });

  })

/**
 * Created by User on 9/2/2016.
 */
var APP = angular.module('starter')
    .factory('IssuesService', function($http) {

        return {
            all: function() {
                return $http.post('http://localhost:3000/showgoal')

            }
        }
    });

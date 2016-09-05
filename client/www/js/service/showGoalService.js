/**
 * Created by User on 9/2/2016.
 */
angular.module('starter.services')
    .factory('IssuesService', function($http) {
        var issues = [];
        return {
            all: function() {
                return $http.get('/showgoal')
                    .then(function(data){ // Optional callback inside service
                        issues = data;
                    });
            }
        }
    })

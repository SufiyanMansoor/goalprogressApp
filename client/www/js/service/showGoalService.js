/**
 * Created by User on 9/2/2016.
 */
angular.module('starter.services')
  .factory('Data', function () {
    var user = {};
    return {
      getUser: function () {
        return user;
      },
      setUser: function (userparameter) {
        user = userparameter;
      }
    };
  })

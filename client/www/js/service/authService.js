/**
 * Created by User on 8/31/2016.
 */
/**
 * Created by User on 8/19/2016.
 */
angular.module('starter.services')
  .factory('authService', function ($http, $q, apiURL) {
    return {
      signUp: function (data) {
        var defer = $q.defer();
        $http.post(apiURL + "/signup", data)
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              defer.resolve(response.data);
            } else {
              console.log(response.message)
              defer.reject({status: false, "message": "Error Occured. Please Try Again."});
            }
          }, function (error) {
            if (error) {
              defer.reject({status: false, "message": "Error Occured. Please Try Again."});
            }
          })
        return defer.promise;
      }





    }})

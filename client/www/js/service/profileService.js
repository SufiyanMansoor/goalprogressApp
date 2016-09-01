
/**
 * Created by User on 8/19/2016.
 */
angular.module('starter.services')
  .factory('profileService', function ($http, $q, apiURL) {
    return {
      profilein: function (data) {
        var defer = $q.defer();
        $http.post(apiURL + "/profile", data)
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

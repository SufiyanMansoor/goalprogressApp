/**
 * Created by User on 9/6/2016.
 */
angular.module('starter')
  .factory('getprofileService', function ($http, $q, apiURL) {
    return {
      getprofile: function (data) {
        var defer = $q.defer();
        $http.post(apiURL + "/getprofile", data)
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

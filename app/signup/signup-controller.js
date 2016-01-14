(function(){
    angular.module('MeanSocial')
        .controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http){

            $scope.createUser = function(){

                $http.post('api/user/signup', $scope.newUser)
                    .success(function(response){
                        console.log(response);
                    }).error(function(error){
                        console.log(error);
                    });

            };

        }]);
}());

(function(){

    angular
        .module('MeanSocial')
        .factory('SignUpService', SignUpService);

    SignUpService.$inject = ['$http'];

    function SignUpService($http) {
        var service = {
            createUser: createUser
        };

        return service;

        function createUser(newUser) {
            return $http({
                url: 'api/user/signup',
                method: "POST",
                data: newUser
            });
        }
    }

}());

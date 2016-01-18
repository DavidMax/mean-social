(function(){
    angular
        .module('MeanSocial')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', '$state', 'SignUpService'];

    function SignUpController($scope, $state, SignUpService) {

        $scope.createUser = function() {
            SignUpService.createUser($scope.newUser);
        };

    }

}());

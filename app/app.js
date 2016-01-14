(function(){
    angular.module('MeanSocial', ['ui.router'])
        .config(function ($stateProvider) {

            $stateProvider
                .state('signUp', {
                    url: '/signup',
                    templateUrl: "app/signup/signup.html",
                    controller: 'SignUpController'
                });
        });
}());

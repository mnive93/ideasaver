(function() {
    'user strict';
    angular 
        .module('ideasaverApp',['firebase','ngMaterial','angular-md5','ui.router'])
        .config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/auth');
    $stateProvider
        .state('auth',{
            url : '/auth',
            templateUrl : 'components/auth/authView.html',
         controller : 'AuthController as auth'

            })
        .state('idea',{
            url : '/idea',
            templateUrl : 'components/status/statusView.html',
            controller : 'StatusController as idea'

            });
        });
    })();    

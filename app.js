(function() {
    'user strict';
    angular 
        .module('ideasaverApp',['firebase','ngMaterial','angular-md5','ui.router'])
        .config(function($stateProvider,$urlProvider)) {

    $urlRouterProvider.otherwise('/auth');
    $stateProvider
        .state('auth',{
            url : '/auth',
            templateUrl : 'components/auth/authView.html',
         controller : 'AuthController as auth'

            })
        .state('idea',{
            url : '/idea',
            templateUrl : 'components/status/ideaView.html',
            controller : 'IdeaController as idea'

            });
        });
    })();    

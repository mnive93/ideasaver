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
            templateUrl : 'components/status/ideaView.html',
            controller : 'IdeaController as idea'

            });
        })
    .run(function($rootScope,$state,User){
        $rootScope.$on('$stateChangeStart',function() {
            var loggedInUser = User.getLoggedInUser();
            console.log("jehrw"+loggedInUser.uid);
            if(loggedInUser) {
                $rootScope.loggedInUserData  = User.getUserData(loggedInUser.uid);
                console.log("werwqer",$rootScope.loggedInUserData);
            
            }
        });
    });
            
    })();    

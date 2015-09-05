(function() {
    'use strict' ;
    angular 
    .module('ideasaverApp')
    .factory('Auth',AuthService);

    function AuthService($firebaseAuth) {
        var ref = new Firebase("https://ideasaver.firebaseio.com");
        return $firebaseAuth(ref);
    
    }
})();

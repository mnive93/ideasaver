( function() {
    'use-strict';
    angular
    .module('ideasaverApp')
    .factory('Idea',IdeaService);
    function IdeaService($firebaseArray){
            var ref = new Firebase("https://ideasaver.firebaseio.com/idea");
            return $firebaseArray(ref);
    }
})();

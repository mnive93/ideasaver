(function() {
    'use-strict';
    angular
            .module('ideasaverApp')
            .controller('IdeaController',IdeaController);
    function IdeaController($rootScope,Idea,md5){
        var vm = this;
        vm.addStatus = addStatus;
        vm.md5 = md5;
        vm.ideaData = Idea;
       // console.log("wedqw",$rootScope.loggedInUserData.username);
        function addStatus() {
            if(vm.ideaText) {
                vm.ideaData.$add({

                    date : Firebase.ServerValue.TIMESTAMP,
                    text : vm.ideaText,
                    user : {
                        username : $rootScope.loggedInUserData.username,
                        email : $rootScope.loggedInUserData.email
                    }
                });
            vm.ideaText = '';
            }
        }
    }
})();

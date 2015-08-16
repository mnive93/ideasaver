(function(){
    'use strict';
    angular
        .module('ideaApp');
        .controller('AuthController',AuthController);

    function AuthController(Auth $state){
        var vm = this;
        vm.createUser = createUser;
        vm.login = login;
    function createUser() {
    Auth.$unauth();
    Auth.$createUser({
        email : vm.email,
        password : vm.password
    }).then(function(userData) {
        login();
    }).catch(function(error){
        vm.error = error;
    });
    }
    }

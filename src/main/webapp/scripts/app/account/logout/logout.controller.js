'use strict';

angular.module('eadateApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

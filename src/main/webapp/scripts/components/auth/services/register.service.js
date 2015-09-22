'use strict';

angular.module('eadateApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



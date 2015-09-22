'use strict';

angular.module('eadateApp')
    .factory('AuthorSearch', function ($resource) {
        return $resource('api/_search/authors/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

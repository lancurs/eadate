 'use strict';

angular.module('eadateApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-eadateApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-eadateApp-params')});
                }
                return response;
            },
        };
    });
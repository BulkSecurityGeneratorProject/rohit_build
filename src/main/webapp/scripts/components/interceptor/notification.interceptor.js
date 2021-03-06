 'use strict';

angular.module('blrpoolApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-blrpoolApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-blrpoolApp-params')});
                }
                return response;
            }
        };
    });

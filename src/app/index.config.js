(function() {
    'use strict';

    angular.module('app')
        .config(config);

    function config($logProvider) {
        $logProvider.debugEnabled(true);
    }

})();

(function () {

    angular.module('app')
        .factory('AnalyticsFactory', AnalyticsFactory);
    AnalyticsFactory.$inject = ["$http"];
    function AnalyticsFactory( $http ) {
        return{
            getDatos: getDatos
        };

        function getDatos (){
            return $http({
                method: 'GET',
                url: window.location.origin + '/data/activity-data.json'
            })
                .then(getDatosComplete)
                .catch(getDatosFailed);

            function getDatosComplete(response) {
                return response;
            }

            function getDatosFailed(error) {
                console.error('XHR Failed for getDatosFailed.' + error.data);
            }

        }
    }
})();

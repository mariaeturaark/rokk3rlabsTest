(function () {

    angular.module('app')
        .controller('AnalyticsController', AnalyticsController);
    AnalyticsController.$inject = ["$scope", "$rootScope", "$state", "$stateParams", "AnalyticsFactory"];
    function AnalyticsController( $scope, $rootScope, $state, $stateParams, AnalyticsFactory) {
        var analytics = this;
        analytics.labels = ["January", "February", "March", "April", "May", "June", "July"];
        analytics.series = ['Series A', 'Series B'];
        analytics.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        AnalyticsFactory.getDatos().then(getDatosComplete);

        function getDatosComplete(response) {
            console.log(response);
        }

        analytics.onClick = function (points, evt) {
            console.log(points, evt);
        };
        analytics.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
        analytics.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        }
    }
})();

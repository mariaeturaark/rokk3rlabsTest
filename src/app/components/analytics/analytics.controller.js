(function () {

    angular.module('app')
        .controller('AnalyticsController', AnalyticsController);

    function AnalyticsController( $scope, $rootScope, $state, $stateParams) {
        var analytics = this;
        analytics.labels = ["January", "February", "March", "April", "May", "June", "July"];
        analytics.series = ['Series A', 'Series B'];
        analytics.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
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

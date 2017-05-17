(function () {

    angular.module('app')
        .controller('NewsController', NewsController);

    function NewsController( $scope, $rootScope, $state, $stateParams) {
        var ctrl = this;
        ctrl.adminName="Maria Etura";
    }

})();

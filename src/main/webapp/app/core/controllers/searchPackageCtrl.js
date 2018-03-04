app.controller("SearchPackageCtrl", function ($scope, PackageService, BASE_TEMPLATE_PATH) {

    var initialLoad = () => {
        $scope.packageList = [];
        loadPackageList();
    }

    var loadPackageList = () => {
        PackageService.getAllPackages()
            .then(response => {
                $scope.packageList = response.data;
            }).catch(error => {
                console.log(error);
            });
    };

    $scope.order = (field) => {
      $scope.field = field;
    }

    initialLoad();
    initialLoad();
});


app.controller('reviewsCtrl', function ($scope, $modal, $filter, Data) {




$scope.loading = true;

Data.get('reviews').then(function(data){
        $scope.reviews = data.data;
				console.log(data.data);
		}).finally(function () {
		$scope.loading = false;
	});
/****************pagination******************/
	$scope.filteredReviews = [];
 $scope.currentPage = 1;
 $scope.numPerPage = 5;
 $scope.maxSize = 3;

 // $scope.$watch('currentPage + numPerPage', function() {
 // 	var begin = (($scope.currentPage - 1) * $scope.numPerPage)
 // 	, end = begin + $scope.numPerPage;
 //
 // 	$scope.filteredReviews = $scope.reviews.slice(begin, end);
 // 	//console.log($scope.reviews.slice(begin, end))
 // });
 /****************pagination******************/
	Data.get('distinctProducers').then(function(data){
        $scope.producers = data.data;
    });

	Data.get('distinctVintages').then(function(data){
        $scope.vintages = data.data;
    });

	Data.get('distinctScores').then(function(data){
        $scope.scores = data.data;
    });

		Data.get('country').then(function(data){
	        $scope.country = data.data;
	    });

			$scope.countryChange = function(id){
					Data.get('regionsData/'+id).then(function(data){
								$scope.region = data.data;
								console.log($scope.region);
				});

	    };
			//reviews
			Data.get('wineryVisits').then(function(data){
							$scope.winery = data.data;
							console.log(data.data);
					}).finally(function () {
					$scope.loading = false;
				});

		//Wine Data
			$scope.wineData=function(wineryName)
			{
				console.log(wineryName);
				Data.get('winesdata/'+wineryName).then(function(data){
			        $scope.wines = data.data;
			    });
			}
	$scope.open = function (w,size) {
        var modalInstance = $modal.open({
          templateUrl: 'partials/wines.html',
          controller: 'wineViewCtrl',
          size: size,
          resolve: {
            item: function () {
              return w;
            }
          }
        });
    };

});

app.controller('wineViewCtrl', function ($scope, $sce, $modalInstance, item, Data) {

  $scope.wine = angular.copy(item);
  $scope.wineDescription = $sce.trustAsHtml($scope.wine.description)

	$scope.cancel = function () {
		$modalInstance.dismiss('Close');
	};
    $scope.title = 'Wine';
});

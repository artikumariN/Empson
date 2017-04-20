app.controller('landingCtrl', function ($scope, $modal, $filter, Data) {
	Data.get('articles').then(function(data){
        $scope.articles = data.data;
    });
	Data.get('latestReviews').then(function(data){
        $scope.latestReviews = data.data;
    });
		$scope.menuData=[{
			name:'Home',
			link:'#'
		},
		{
			name:'Portfolio',
			link:'#/portfolio'
		},
		{
			name:'Reviews',
			link:'#/reviews'
		},
		{
			name:'About',
			link:'#/about'
		},
		{
			name:'Contact',
			link:'#/contact'
		}
	];
 console.log($scope.menu);
		$scope.data=[
			       {
			       name:'portfolio',
			       value:'Portfolio',
						 img:'portfolio-link.png',
			     },
			     {
						 name:'reviews',
			       value:'Reviews',
						 img:'reviews-link.png',
			     },
			     {
						 name:'sales-tools',
						 value:'Sales Tools',
						img:'sales-tools-link.png',
			     },
					 {
					 name:'news',
					 value:'News',
					 img:'news-link.png',
				 },
				 {
					 name:'contact',
					 value:'Contact Us',
					 img:'contact-us-link.png',
				 },
				 {
					 name:'where-to-buy',
					 value:'Where To Buy',
						img:'where-to-buy-link.png',
				 },
				 {
				 name:'winery-visits',
				 value:'Winery Visits',
				 img:'winery-visits-link.png',
			 },
			 {
				 name:'Barcodes_AllWines.pdf',
				 value:'Barcode',
				 img:'barcode-link.png',
			 },
			 {
				 name:'PalletConfiguration.pdf',
				 value:'Pallet Configuration',
					img:'pallet-configuration-link.png',
			 },
			 {
				name:'Empson_USA_Portfolio_Book_2014.pdf',
				value:'Download Portfolio',
				img:'download-portfolio-link.png',
			 },
			 {
				name:'build-sell-sheet',
				value:'Build Sellsheet',
				 img:'build-sellsheet-link.png',
			 },
   ];

 });

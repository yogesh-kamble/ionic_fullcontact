angular.module('controller', ['services'])

.controller('HomeCtrl', function($scope, $ionicModal, $timeout, fullcontactService) {
    //$scope.selected_city = "";
    $scope.citylist = [
        'Pune',
        'Bangalore'
    ];
    $scope.update = function(selectedCity){
        if (selectedCity === 'Pune'){
            $scope.arealist = ['Kothrud', 'Viman Nagar', 'Baner'];
        }
    }

    $scope.search = function(user_email){
        var contact = fullcontactService.query({"email": user_email, "key": "3a1736bb3d27057d"});
        contact.getperson(function(successresponse){
            console.log(successresponse)
            $scope.photo_list = successresponse.photos;
            $scope.profile_list = successresponse.socialProfiles;
        }, function(error){
            console.log(error)
        });
        /*$scope.res_list = [
            {
                "name": "Chaityana Paratha",
                "logo": "http://staff.titbit.com/images/restaurantimages/logo/Chaitanya-Paranthas.jpg",
                "res_type": "Veg"
            },
            {
                "name": "Pizza Hut",
                "logo": "http://discoversumterfl.com/www-2014-v2/wp-content/uploads/2013/10/PRN10-PIZZA-HUT-LOGO-1y-4-1-1-1High.jpg",
                "res_type": "Veg-NonVeg"
            } 
        ] */
    }
});


/**
 * BookStoreController 控制器
 */
angular.module('BookStoreController',[])
    .controller('BookListController',function ($scope,$http) {
        $scope.orderby = "title";
        $http
            .get('./db/books.json')
            .then(function (res) {
                $scope.booksData = res.data.datas;

            })
    })
    .controller('BookDetailController',function ($scope,$http,$routeParams) {
        let bootId = $routeParams.bookId;
        $scope.orderby = "title";
        $scope.imgSrc = bootId
        $http
            .get('./db/' + bootId + '.json')
            .then(function (res) {
                $scope.book = res.data;
                $scope.changeImg = function (img) {
                    $scope.imgSrc = img
                }
            })
    })
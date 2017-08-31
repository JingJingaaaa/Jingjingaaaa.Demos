
/**
 * BookStoreRoute 的路由配置
 */
angular.module('BookStoreRoute',['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'./list.html',
                controller:'BookListController'
            })
            .when('/:bookId',{
                templateUrl:'./detail.html',
                controller:'BookDetailController'
            })
            .otherwise({
                redirectTo:'/'
            })
    })
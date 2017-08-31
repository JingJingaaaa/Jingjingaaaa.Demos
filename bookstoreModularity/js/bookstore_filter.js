 angular.module('BookStoreFilter',[])
    .filter('StatusText',function () {
        return function (input) {
            // true  正常出售   false 暂无库存
            return input==="true" ? "正常出售" : "暂无库存"
        }
    })
    .filter('StatusClass',function () {
        return function (input) {
            // true  正常出售   false 暂无库存
            return input==="true" ? "green-text" : "red-text"
        }
    })
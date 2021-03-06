/**
 * Created by root on 7/15/15.
 */
angular.module("sportsStore")
    .constant("productListActiveClass","btn-primary")
    .constant("productListPageCount",3)
    .controller("productListCtrl",function($scope,$filter,productListActiveClass,productListPageCount,cart){
        var selectedCategory = null;

        $scope.selectedPage=1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
            $scope.selectedPage=1;
        };

        $scope.selectPage = function(newpage){
            $scope.selectedPage=newpage;
        };

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        };

        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? productListActiveClass:"";
        };

        $scope.getPageClass = function(page){
            return $scope.selectPage == page ? productListActiveClass : "";
        };

        $scope.addProductToCart = function(product){
            cart.addProduct(product.id,product.name,product.price);
        }

    });
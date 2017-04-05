/**
 * Created by zzq on 2017/3/27.
 */
define(function(require){
    var app = require('app');
    require('myService');
    require('load');
    app.controller('userListController',function($scope,myService){
        var showUserList = function(url){
            myService.getJson(url)
                .success(function(data){
                    load.close();
                    $scope.userList = data.userList;
                })
                .error(function(){
                    console.log('error...');
                });
        }
        showUserList('res/json/userList1.json');
        $scope.prevPage = function(){
            load.onLoading();
            showUserList('res/json/userList1.json');
        };
        $scope.nextPage = function(){
            load.onLoading();
            showUserList('res/json/userList2.json');
        }
    })
})
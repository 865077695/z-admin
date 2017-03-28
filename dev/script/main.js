/**
 * Created by zzq on 2017/3/17.
 */
window.loading={
    finish:function(callback){
        //保留这个方法做一些加载完成后的处理，比如可以在这里结束加载动画
        console.log("domReady!");
        callback();
    },
    load:function(){
        // var domain='https://865077695.github.io/admin/';
        var domain='';
        baseUrl = domain+'res';
        require.config({
            baseUrl:baseUrl,
            paths:{
                "domReady":"lib/require/domReady.min",
                "layer":"lib/layer/layer",
                "angular":"lib/angular/angular",
                "uiRouter":"lib/angular/angular-ui-router",
                "angular-nice-bar":"lib/angular/angular-nice-bar",
                "asyncLoader":"lib/angular/angular-async-loader",
                "jquery":"lib/jquery/jquery.min",
                "loadCss":"script/loadCss",
                "routes":"script/routes",
                "app":"script/app",
                "index":"script/index",
                "superController":"script/superController",
                "myService":"script/myService",
                "myDirective":"script/myDirective"
            },
            shim:{
                "angular":{
                    exports:"angular"
                },
                "uiRouter":{
                    deps:["angular"]
                },
                "layer":{
                    exports:"layer"
                },
                "angular-nice-bar":{
                    deps:["angular"]
                }
            },
            deps:['index']
        });
    }
    
}
window.loading.load();
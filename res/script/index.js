/**
 * Created by zzq on 2017/3/17.
 */
define(["require", "angular", "layer","routes",'myDirective'], function (require, angular, layer)
{
    console.log('index.js');
    layer.config({
        path: './res/lib/layer/'              //layer.js的文件路径,注意加斜杠
    });
    var loadDom = layer.load(1, {
        shade: [0.1, '#fff'], //0.1透明度的白色背景
        area: ['37px', '37px']
    });
    
    
    require(['domReady!'], function (document)
    {     //domReady依赖的!前缀来强制require()回调函数在执行之前等待DOM Ready。
        
        /*手工启动angular*/
        window.loading.finish(function ()
        {
            angular.bootstrap(document,['app']);
            layer.close(loadDom);
            
        });
    });
})
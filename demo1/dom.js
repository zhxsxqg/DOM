window.$=function(seletor){
    var arr = [];
    if(typeof seletor === 'string'){
        var items=document.querySelectorAll(seletor);
        for (var i = 0; i < items.length; i++) {
            arr.push(items[i]);
        }
    }else if(seletor instanceof Array){
        for (var i = 0; i < seletor.length; i++) {
            arr.push(seletor[i]);
        }
    }
    arr.attr = function(attribute,value){//设置或获取属性
        if(value!== undefined){
            for (var i = 0; i < arr.length; i++) {
                arr[i].style[attribute]=value;
            }
            return arr;
        }else {
            var result=[];
            for (var i = 0; i < arr.length; i++) {
                result.push(arr[i].getAttribute(attribute));
            }
            return result;
        }
    }
    arr.removeAttr = function(attribute){//删除属性
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.removeProperty(attribute);
        }
        return arr;
    }
    arr.css=function(name,value){//设置和获取css样式
        if(value!==undefined){
            for (var i = 0; i < arr.length; i++) {
                arr[i].style[name]=value;
            }
            return arr;
        }else if(typeof name === 'object'){//多样式
            for(var j in name){
                for (var i = 0; i < arr.length; i++) {
                    arr[i].style[j]=name[j];
                }
            }
            return arr;
        }else{
            var result=[];
            for (var i = 0; i < arr.length; i++) {
                result.push(arr[i].style[name]);
            }
            return result;
        }
        return arr;
    }
    arr.on = function(ev, fn){//添加事件
        for(var i=0;i<arr.length;i++){
            arr[i].addEventListener(ev, fn);
        }
    }
    arr.hover=function(fn1,fn2){//移入移出
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener('mouseover', fn1);
            arr[i].addEventListener('mouseout', fn2);
        }
    }
    arr.parent=function(){//父元素
        var pare=[];
        for (var i = 0; i < arr.length; i++) {
            pare.push(arr[i].parentNode)
        }
        return $(pare);
    }
    arr.next=function(){//下一个兄弟元素
        var result=[];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i].nextSibling instanceof Element){
                result.push(arr[i].nextSibling);
            }else{
                result.push(arr[i].nextSibling.nextSibling);
            }
        }
        return $(result);
    }
    arr.find=function(seletor){//查找元素
        var items=arr[0].querySelectorAll(seletor);
        var result=[];
        for (var i = 0; i < items.length; i++) {
            result.push(items[i]);
        }
        return $(result);
    }
    arr.hide=function(){
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.display='none';
        }
    }
    return arr;
}

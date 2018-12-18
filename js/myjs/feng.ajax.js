/***********************
 * ajax封装get、post请求
 ***********************/
const Ajax = {
    params: function(data) {
        var arr = [];
        for (var i in data) {
            arr.push(encodeURIComponent(i) +'='+ encodeURIComponent(data[i]));
        }
        // arr.push('randomNumber='+ Math.random());
        arr.join('&');
        return arr;
    },
    get: function(param) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', param.url +'?'+ Ajax.params(param.data), param.async);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200 || xhr.status == 304) {
                    param.success.call(this, JSON.parse(xhr.response));
                } else {
                    param.error.call(this, xhr.status);
                }
            }
        }
        xhr.timeout = 20000;
        xhr.ontimeout = function() {
            console.info('connect timout!');
        }
        xhr.send(null);
    },
    post: function(param) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', param.url, param.async);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200 || xhr.status == 304) {
                    param.success.call(this, JSON.parse(xhr.response));
                } else {
                    param.error.call(this, xhr.status);
                }
            }
        }
        xhr.timeout = 20000;
        xhr.ontimeout = function() {
            console.info('connect timout!');
        }
        xhr.send(Ajax.params(param.data));
    }
}
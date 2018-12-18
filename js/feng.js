'use strict';

/***********************
 * ajax封装get、post请求
 ***********************/
var Ajax = {
    params: function params(data) {
        var arr = [];
        for (var i in data) {
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
        // arr.push('randomNumber='+ Math.random());
        arr.join('&');
        return arr;
    },
    get: function get(param) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', param.url + '?' + Ajax.params(param.data), param.async);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    param.success.call(this, JSON.parse(xhr.response));
                } else {
                    param.error.call(this, xhr.status);
                }
            }
        };
        xhr.timeout = 20000;
        xhr.ontimeout = function () {
            console.info('connect timout!');
        };
        xhr.send(null);
    },
    post: function post(param) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', param.url, param.async);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    param.success.call(this, JSON.parse(xhr.response));
                } else {
                    param.error.call(this, xhr.status);
                }
            }
        };
        xhr.timeout = 20000;
        xhr.ontimeout = function () {
            console.info('connect timout!');
        };
        xhr.send(Ajax.params(param.data));
    }
};
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***********************
 * 查看数组维数
 ***********************/
function num(arr) {
    if (arr instanceof Array) {
        return Math.max.apply(Math, _toConsumableArray(arr.map(function (e) {
            return 1 + parseInt(num(e));
        })));
    } else {
        return 0;
    }
}
"use strict";

/*base64加密解密*/
var Base64 = {
    encode: function encode(name) {
        var str = CryptoJS.enc.Utf8.parse(name);
        var base64 = CryptoJS.enc.Base64.stringify(str);
        return base64;
    },
    decode: function decode(name) {
        var words = CryptoJS.enc.Base64.parse(name);
        return words.toString(CryptoJS.enc.Utf8);
    }
};
'use strict';

/***********************
 * 弹出层消息
 ***********************/
function popup(contents) {
    var stat = false;
    if (!contents) {
        contents = '请正确步骤后操作：<br />（1）、先选择显示图层；<br />（2）、再选择当前操作图层！';
    }
    $('#popupBox').html('<div>' + contents + '</div>');
    for (var i = 0; i < $('#getGeojson > div').length; i++) {
        var stat1 = $($($('#getGeojson > div')[i]).children('input')[0]).prop('checked');
        var stat2 = $($($('#getGeojson > div')[i]).children('input')[1]).prop('checked');
        if (stat1 && stat2) {
            $('#popupBox').html('');
            stat = false;
            break;
        } else {
            stat = true;
        }
    }
    if (stat) {
        $('#popupBox div').fadeIn('slow').delay(1500).fadeOut('slow');
    }
    return stat;
};

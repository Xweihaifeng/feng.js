
/***********************
 * 查看数组维数
 ***********************/
function n_dimArray(arr) {
    if(arr instanceof Array) {
        return Math.max(...arr.map(e => {
            return 1 + parseInt(n_dimArray(e))
        }))
    } else {
        return 0
    }
}

function n5_dimArray(arra) {
    var inde = 1;
    for(var i = 0; i < arra.length; i++) {
        if(Object.prototype.toString.call(arra[i])  ===  "[object Array]") {
            inde++;
            arra = arra[i];
            n5_dimArray(arra);
        }
    }
    return inde;
}
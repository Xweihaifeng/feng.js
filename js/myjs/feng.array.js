/***********************
 * 查看数组维数
 ***********************/
function num(arr) {
    if(arr instanceof Array) {
        return Math.max(...arr.map(e => {
            return 1 + parseInt(num(e))
        }))
    } else {
        return 0
    }
}
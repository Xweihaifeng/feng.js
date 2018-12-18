/***********************
 * 弹出层消息
 ***********************/
function popup(contents) {
    var stat = false;
    if(!contents) {
        contents = '请正确步骤后操作：<br />（1）、先选择显示图层；<br />（2）、再选择当前操作图层！';
    }
    $('#popupBox').html('<div>' + contents + '</div>');
    for(var i = 0; i < $('#getGeojson > div').length; i++) {
        var stat1 = $($($('#getGeojson > div')[i]).children('input')[0]).prop('checked');
        var stat2 = $($($('#getGeojson > div')[i]).children('input')[1]).prop('checked');
        if(stat1 && stat2) {
            $('#popupBox').html('');
            stat = false;
            break;
        } else {
            stat = true;
        }
    }
    if(stat) {
        $('#popupBox div').fadeIn('slow').delay(1500).fadeOut('slow');
    }
    return stat;
};
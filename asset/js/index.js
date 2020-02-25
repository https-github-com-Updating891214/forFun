/**
 * Created by leiwang on 20/2/20.
 */
//下列三个函数主要自动完成对select标签中option的添加
function listNum_address(){
    var subAddrObj = document.getElementById("RTaddrID");
    //alert("ok");
    //subAddrObj.empty();
    //alert(subAddrObj);
    for (var i = 0; i < 32; ++i)
    {
        subAddrObj.options.add(new Option(i,i));
    }
}

function listNum_subAdrr(){
    var subAddrObj = document.getElementById("subAddressID");
    //alert("ok");
    //subAddrObj.empty();
    //alert(subAddrObj);
    for (var i = 0; i < 32; ++i)
    {
        subAddrObj.options.add(new Option(i,i));
    }
}

function listNum_wordCnt(){
    var subAddrObj = document.getElementById("wordCntID");
    //alert("ok");
    //subAddrObj.empty();
    //alert(subAddrObj);
    for (var i = 0; i < 32; ++i)
    {
        subAddrObj.options.add(new Option(i,i));
    }
}

//点击生成
function generation(){
    //获取消息名称
    var msgNameObj = document.getElementById("st_nameID");
    var msgName = msgNameObj.value;

    //获取rt地址
    var msgRTAddrObj = document.getElementById("RTaddrID");
    var msgRTAddrValue = msgRTAddrObj.value;

    //获取消息方向
    var msgDirectionObj = document.getElementById("transfer");
    var msgDirectionValue = msgDirectionObj.value;

    //获取消息自地址
    var msgSubAddrObj = document.getElementById("subAddressID");
    var msgSubAddrValue = msgSubAddrObj.value;

    //获取消息字长度
    var msgWordCntObj = document.getElementById("wordCntID");
    var msgWordCntValue = msgWordCntObj.value;

    pywebview.api.printMsg(msgName, msgRTAddrValue, msgDirectionValue, msgSubAddrValue, msgWordCntValue);

}


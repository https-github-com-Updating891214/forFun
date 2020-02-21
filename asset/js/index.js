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


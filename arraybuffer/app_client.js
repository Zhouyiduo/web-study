
function loadArrayBuffer()
{
    console.log("load arraybuffer");
    getArrayBuffer("load-arraybuffer",callbackArraBuffer);
}

function getArrayBuffer(url,callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET","load-arraybuffer",true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(){
        callback(xhr.response);
    }
    xhr.send(null);
}

function callbackArraBuffer(response)
{
    var arrayResponse = xhr.response;
    var dataView = new DataView(arrayResponse);
    var ints = new Uint32Array(dataView.byteLength / 4);

    console.log(ints.length);
}

$(document).ready(function () {
    $("#button-load-arraybuffer").click(loadArrayBuffer);
})
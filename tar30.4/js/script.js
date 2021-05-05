window.onload = function(){
    document.getElementById("add-box").onclick = function(){
       var floatBox = document.createElement("section");
       var boxes = document.getElementById("boxes");
       boxes.appendChild(floatBox);
    }
    $flag = true;
    $("#change-bg").click(function (){
        $("body").css("background-color","red");
    })

}

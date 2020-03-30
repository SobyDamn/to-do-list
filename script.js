//adding elements & cross button
function getNewElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var convertLi = document.createTextNode(inputValue);
    li.appendChild(convertLi);
    if (inputValue===''){
        alert('YOU MUST WRITE SOMETHING!!');
    }
    else{
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';
var span1 = document.createElement("span1");
var span2 = document.createElement("span2");
var cross = document.createTextNode("\u2716");
var tick  = document.createTextNode("\u2714");
span1.className="close";
span2.className="check";
span1.appendChild(cross);
span2.appendChild(tick);
li.appendChild(span2);
li.appendChild(span1);

var i;
var close= document.getElementsByClassName("close");
for(i=0;i<close.length;i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var check = document.getElementsByClassName("check");
for(i=0;i<check.length;i++){
    check[i].onclick = function () {
        var div = this.parentElement;
        if (div.style.textDecorationLine != "line-through") {
            div.style.textDecorationLine = "line-through";
            div.style.boxShadow="0 0 10px white, 0 0 40px white";
            //checked color here
            div.style.color="rgba(53, 3, 252,1)"
        }
        else {
            div.style.textDecorationLine = "none";
            div.style.boxShadow="0 0 10px #02c3fd, 0 0 40px #02c3fd";
            //Not-Checked color here
            div.style.color="white"
        }
        
    }
}
}

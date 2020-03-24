//adding elements & cross button
function getNewElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var convertLi = document.createTextNode(inputValue);
    li.appendChild(convertLi);
    if (myInput===''){
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
span2.className="tick";
span1.appendChild(cross);
span2.appendChild(tick);
li.appendChild(span2);
li.appendChild(span1);

for(i=0;i<close.length;i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        //div.style.textDecorationLine = "line-through";
    }
}
for(i=0;i<tick.length;i++){
    tick[i].onclick = function () {
        var div = this.parentElement;
        div.style.textDecorationLine = "line-through";
    }
}
}
//adding function in cross button
var close= document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        //div.style.textDecorationLine = "line-through";
    }}

//on clicking creates a strike-through
var tick = document.getElementsByClassName("tick");
var i;
for(i=0;i<tick.length;i++){
    tick[i].onclick = function () {
        var div = this.parentElement;
        div.style.textDecorationLine = "line-through";
    }
}   
 
var list = document.querySelector("ul");
list.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.tagName.toggle('LI');
    }
},false) ;   




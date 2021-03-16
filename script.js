function compute()
{ var p1 = document.getElementById("principal");
var p=parseInt(p1.value);
if(p1.value=="" || p<=0)
{
alert("please enter positive number");
p1.focus()
}
else {
document.getElementById('result').style.display="block";
   
var r= parseFloat(document.getElementById("rate").value);
var y=parseInt(document.getElementById("year").value);
var total=(p*r*y)/100;
var d=new Date();
var yr=parseInt(d.getFullYear())+y;
document.getElementById("span1").innerHTML=p+".";
document.getElementById("span2").innerHTML=r+"%.";
document.getElementById("span3").innerHTML=total+".";
document.getElementById("span4").innerHTML=yr+".";
}
}
function changeRate(val) {
document.getElementById("range1").innerHTML=val+"%";
}
function display() {
document.getElementById("result").style.display="none";
}
        

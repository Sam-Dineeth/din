function vote(){
var name= document.getElementById("name").value;

var SRN= document.getElementById("name").value
var result=document.getElementById("result");

result.innerHTML=name + ", you have scored:"
+ pass.toFixed(2)+"%";//Display name and score with 2 decimal
if (marks >=0 && marks<= 35){
    resultmessage = name + "has failed with " +marks + "marks";
}
else if(marks >35 && marks<=60){
    resultmessage = name + "has passed with " + marks + "marks.";
} else if( marks> 60 && marks<= 80) {
    resultmessage = name + "has passed with merit" + marks + "marks.";
} else if ( marks > 80 && marks <= 100) {
    resultmessage = name +"has passed with destinction" + marks + "marks.";
}    


}



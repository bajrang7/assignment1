
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    
return RGBColor;
  }  let p1;let pickedcolor;let z;let y;let pc;let i;
function choiceselected(p1){

 pickedcolor=randomRGB();
 document.getElementById("RGBHead").innerHTML = pickedcolor;

 let randombt=Math.floor(Math.random()*p1);
let arr=[];
for(let j=1;j<=p1;j++){
  arr[j-1]=j;
}
z=arr[randombt];
let x='bt'+z;

document.getElementById(x).style.backgroundColor=  pickedcolor;

for( i=1;i<=p1;i++)
{if(arr[randombt]!=i)
{  pc = randomRGB();
    y='bt'+i;
   
    document.getElementById(y).style.backgroundColor=pc;}}}
     let tempentry; 
  function entry1()
  {tempentry=1;if(tempentry==z){win();}
else{document.getElementById("bt1").style.display='none';lose()}
}
 function entry2()
  {tempentry=2;if(tempentry==z){win();}
  else{document.getElementById("bt2").style.display='none';lose()}
}
  function entry3()
  {tempentry=3;if(tempentry==z){win();}
  else{document.getElementById("bt3").style.display='none';lose()}
}
  function entry4()
  {tempentry=4;if(tempentry==z){win();}
  else{document.getElementById("bt4").style.display='none';lose()}
}
  function entry5()
  {tempentry=5;if(tempentry==z){win();}
  else{document.getElementById("bt5").style.display='none';lose()}
}
  function entry6()
  {tempentry=6;if(tempentry==z){win();}
  else{document.getElementById("bt6").style.display='none';lose()}
}let p2;
function win()
{ document.getElementById("mainbody").style.backgroundColor=pickedcolor;
document.getElementById("headp").style.backgroundColor=pickedcolor;
document.getElementById("reset").innerHTML = "Play Again";
document.getElementById("losetext").style.display="none";
  document.getElementById("wintext").style.display="inline-block";
  document.getElementById("wintext").style.textAlign="center";
  document.getElementById("wintext").style.padding="0 30% 0 50%";
  if(b==1)
  for(i=1;i<=6;i++)
  {
    z='bt'+i;
    document.getElementById(z).style.display="inline";
    document.getElementById(z).style.backgroundColor=pickedcolor;
  }else{
  for(i=1;i<=3;i++)
  {
    z='bt'+i;
    document.getElementById(z).style.display="inline";
    document.getElementById(z).style.backgroundColor=pickedcolor;
  }}
}
function lose(){

  document.getElementById("losetext").style.display="inline-block";
  document.getElementById("losetext").style.textAlign="center";
  document.getElementById("losetext").style.padding="0 30% 0 50%";
}




let b=1;
function hard(){ document.getElementById("wintext").style.display="none";
document.getElementById("losetext").style.display="none";
document.getElementById("bt1").style.display="inline";
document.getElementById("bt2").style.display="inline";
document.getElementById("bt3").style.display="inline";
document.getElementById("bt4").style.display="inline";
document.getElementById("bt5").style.display="inline";
document.getElementById("bt6").style.display="inline";
document.getElementById("mainbody").style.backgroundColor="rgb(27, 192, 233)";
document.getElementById("headp").style.backgroundColor="rgb(27, 192, 233)";
b=1;
choiceselected(6);
}
function easy(){ document.getElementById("wintext").style.display="none";
document.getElementById("losetext").style.display="none";
  document.getElementById("bt1").style.display="inline";
document.getElementById("bt2").style.display="inline";
document.getElementById("bt3").style.display="inline";
document.getElementById("bt4").style.display="none";
document.getElementById("bt5").style.display="none";
document.getElementById("bt6").style.display="none";
document.getElementById("mainbody").style.backgroundColor="rgb(27, 192, 233)";
document.getElementById("headp").style.backgroundColor="rgb(27, 192, 233)";
b=2;
choiceselected(3);}
hard();



function reset(){
  document.getElementById("reset").innerHTML = "Reset";
if(b==1){hard();}
else{easy();}
}
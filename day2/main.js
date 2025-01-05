// Select the element with the ID 'main'
var myElement = document.getElementById('main'),
myBoutton=document.querySelector('button');

// Define the function to change the color of the element

// function changeColor() {
  
//     myElement.style.color = 'red';
// }

myBoutton.onclick=function(){
    
    myElement.style.color='red'
};


var myDiv=document.getElementById("div");


// myDiv.onmouseover=function(div){
  
//     myDiv.innerHTML="Saja Alkhatib";
//     myDiv.style.color='red'

// }


myDiv.onmouseout=function(div){
 
    myDiv.innerHTML="saja alkhatib 24-2-2001";
    myDiv.style.color='red'

}




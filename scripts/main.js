// javascript的等價運運算子為===
// if (myHeading.textContent === 'Hello world!')
// {
//     alert('Heading has been change!');
// }

// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};
// document.querySelector('html').onclick = function() {
//     var myHeading = document.querySelector('h1');
    
//         myHeading.textContent = 'Hello world!';    
//     // alert('Heading has been change!');

// }

// var h1 = document.querySelector('h1');
// h1.onselect() = function(){
//     h1.textContent = 'Hello world!';
// }

var myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '.\\images\\350963.png'){
        myImage.setAttribute ('src','.\\images\\chrome.png');
    }
    else
    {
        myImage.setAttribute ('src','.\\images\\350963.png');
    } 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt("Please enter your name.")
    if(!myName || myName === null) {
        myName = resetUserName(myName);
      } 
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

function resetUserName(myName)
{
    while(!myName || myName === null)
    {
        myName = prompt("Sorry, please enter your name again.")
    }
    return myName
}

if(!localStorage.getItem('name'))
{
    setUserName();
} 

else
{
    let storedName = localStorage.getItem('name')
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}






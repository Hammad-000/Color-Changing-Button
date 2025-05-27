








function changecolor(){
 
    
    const red = Math.round(Math.random() * 255).toString(16).padStart(2, "0");
    const green = Math.round(Math.random() * 255).toString(16).padStart(2, "0");
    const blue = Math.round(Math.random() * 255).toString(16).padStart(2, "0");
    const pink = Math.round(Math.random() * 245).toString(16).padStart(2, "0");
      
     
    const color = `#${red}${green}${blue}${pink}`;
    console.log(`Background Color: ${color}`);
    document.body.style.background = color;
    
};
    

let username;
const btn = document.getElementById('submitbtn')
btn.addEventListener("click", writeName)


function writeName(){
username = document.getElementById("enter").value;
document.getElementById("hellow").textContent = ` Hellow ${username}`
};

// changecolor();











// const tag= document.getElementsByTagName("p");

// console.log(tag[0]);
// console.log(tag[0].innerText);
// tag[0].innerText ="wanna take coffie ?"



// const testing= document.getElementsByTagName("h1");

// console.log( testing[0]);
// console.log(testing[0].innerText);
// // testing[0].innerHTML  =("Change");
// testing[0].innerHTML  +=` DOMs`;

// const change = document.getElementById("two");


// console.log(change);
// console.log(change.innerHTML);
// change.innerHTML ="Good Morning"
// change.innerHTML ="Good Evening"








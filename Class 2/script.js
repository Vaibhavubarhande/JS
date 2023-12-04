
// ---------------Event Listener

document.getElementById('btn').addEventListener('click', function () {
    
    document.getElementById('div').innerHTML = "We are in TS";
})


// 2. Double click inner text change


document.getElementById('btn2').btn.addEventListener('dblclick', function () {

    this.innerHTML="Clicked";
})


// 3. Color change while hover or leave on button

document.getElementById('btn3').addEventListener('mouseover', function () {
    document.getElementById('clr').innerHTML = "<h1 style = 'color:red;'> HELLO USER</h1>"
    
})
document.getElementById('btn3').addEventListener('mouseleave', function () {
    document.getElementById('clr').innerHTML = "<h1 style = 'color:Blue;'> HELLO USER</h1>"
    
})

//------------------Calling api from backend

document.getElementById('btn4').addEventListener('click', async function () {

    let val = document.getElementById('inp').value;
    let result = await fetch('https://dummyjson.com/products/'+val, {method: 'GET'})
    let finalResult= await result.json();
    document.getElementById('div2').innerText = finalResult.title;
    
})




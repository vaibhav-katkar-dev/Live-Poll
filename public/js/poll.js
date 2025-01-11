let input=document.querySelector('input');
let view=document.querySelector('#view');
let options=document.querySelector('.option');
let d_name=document.querySelector('#d_name');
// let views=0;


let  views=Number(document.querySelector('#view').innerHTML);
console.log(views);
socket = io();

// socket.on('newview',(v)=>{
    
// })
socket.on('sendFinalData',(arr)=>{
   


})

// redio_name.addEventListener('click',(s)=>{
//     console.log(redio_name.name);
// })

document.addEventListener('DOMContentLoaded', () => {
    let view = document.querySelector('#view');
    let d_name = document.querySelector('#d_name');
    let views = Number(view.innerHTML);
    const socket = io();

    // Increment views and emit to the server
    views += 1;
    let viewAndpoll_name = { newName: d_name.innerHTML, Newviews: views };
    socket.emit('view', viewAndpoll_name);

    console.log(views);

    socket.on('views_update', (newViews) => {
        console.log(newViews);
        view.innerHTML = newViews;
    });

    // Handle radio button click events
let optionClick=[0];


    let radioButtons = document.querySelectorAll('.redio_click');
    radioButtons.forEach((radio) => {
        radio.addEventListener('click', () => {
            console.log(`Selected option: ${radio.value}`);
            // optionClick.pop();
            // optionClick.push(radio.value);
            // console.log(optionClick);
            let optionAndpoll_name = { newName: d_name.innerHTML, selectedOption:radio.value };
            socket.emit('clicked_option', optionAndpoll_name);
        
            
        });
    });

    
});


// const socket=io();
let iname=document.querySelector('#name');
let quetion=document.querySelector('#quetion');
let option_create=document.querySelector('#count');
let create_btn=document.querySelector('#create');
let left_down_option=document.querySelector('.l_d_option');
let right_quetion=document.querySelector('#ceatedQuetion');
let right_radio=document.querySelector('.r_radio');
let option=document.querySelector('.left-down');
let option_container=document.querySelector('#option');

let right_create=document.querySelector('#final');
let right_option_div=document.querySelector('.option_r');


let total=0;
const arr=[];

create_btn.addEventListener("click",()=>{
    // console.log('clicked',quetion.value)
    right_quetion.innerHTML=quetion.value;
    let new_created_option=option_create.value;
    
    // arr.push({
    //     option: String(option_create.value), // Convert value to string
    //     question: String(question.value), // Convert value to string
    //   });
      
    arr.push({name:String(iname.value),option:option_create.value,quetion:quetion.value,});
    // console.log(arr);
    // socket.emit('arr',arr);

    genratePoll(new_created_option);
   
});



// socket.on('test',(a)=>{
//     console.log(a)
// })

function genratePoll(new_v){
    // console.log(totalNo);
   
       
   
        // console.log('no',i);
       let new_option= document.createElement('input');
       let new_p=document.createElement('p');
       total=total+1

       new_p.textContent=new_v;

       new_option.type = "radio";
      
       new_option.class="l_d_option";
       let new_div=document.createElement('div');
       new_div.id='option';
      
       option.appendChild(new_div);

       new_div.appendChild(new_option);
       new_div.appendChild(new_p);

    }


    right_create.addEventListener('click',()=>{
        // arr.push({name:String(iname.value)});
        console.log(iname.value);
        socket.emit('arr',arr);
        for(a of arr){
            // console.log(a.option,"hello");
            // document.addEventListener('DOMContentLoaded',()=>{

                
                let new_option= document.createElement('input');
                let new_p=document.createElement('p');
    
                new_p.textContent=a.option;
                // console.log(a.option,"hi");
    
                 new_option.type = "radio";
    
    
                 new_option.className="r_redio";
                 let new_div=document.createElement('div');
                 new_div.className='in_option';
    
                 right_option_div.appendChild(new_div);
    
                new_div.appendChild(new_option);
                new_div.appendChild(new_p);
            // })

           
        }
        socket.emit('finalPoll',arr);
    })
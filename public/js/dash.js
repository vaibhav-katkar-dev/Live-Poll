let view=document.getElementById('views')
let nameCountdiv = document.querySelector("#totalPools");
let pollList = document.querySelector('.poolList');
let nameCount = 0;
const processedNames = new Set();

const socket = io();

socket.on('sendFinalData', (data) => {
    for (item of data) {
        if (!processedNames.has(item.name)) {
            createPoll(item.name, item.views || 0);
            processedNames.add(item.name);
            nameCount++;
        }
    }

    nameCountdiv.innerHTML = `<i class="fa-solid fa-rectangle-list"></i>${nameCount}`;
});

function createPoll(name, views) {
    const pollDiv = document.createElement('div');
    pollDiv.className = 'pools';

    const nameAnchor = document.createElement('a');
    nameAnchor.href = `/poll/${item.name}`;
    nameAnchor.textContent = name;

    const viewsParagraph = document.createElement('p');
    const eyeIcon = document.createElement('i');
    eyeIcon.className = 'fa-solid fa-eye';
    viewsParagraph.appendChild(eyeIcon);
    viewsParagraph.appendChild(document.createTextNode(` ${views}`));
    viewsParagraph.id=views;

    const editDeleteDiv = document.createElement('div');
    editDeleteDiv.className = 'edit_delete';

    const editLink = document.createElement('a');
    editLink.href = `/voting/${item.name}`;
    const editIcon = document.createElement('i');
    editIcon.className = 'fa-solid fa-pen-to-square';
    editLink.appendChild(editIcon);

    const deleteLink = document.createElement('a');
    deleteLink.href = `/delete/${item.name}`;
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash';
    deleteLink.appendChild(deleteIcon);

    editDeleteDiv.appendChild(editLink);
    editDeleteDiv.appendChild(deleteLink);

    pollDiv.appendChild(nameAnchor);
    pollDiv.appendChild(viewsParagraph);
    pollDiv.appendChild(editDeleteDiv);

    pollList.appendChild(pollDiv);
}



socket.on('views_update',(a)=>{
    console.log(a);
    view.innerHTML=a;
   window.location.href="/dashboard";
})

socket.on('total_views',(tv)=>{
    
})
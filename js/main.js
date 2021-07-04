
console.log("bruh");

// document.addEventListener('DOMcontentloaded', ()=>{
//     console.log("bruh");
    title = document.querySelector('#big_title');
    title.addEventListener('mouseover',()=>{
        img = document.querySelector('.profile > img');
        img.style.opacity='1';
    })
    title.addEventListener('mouseout',()=>{
        img = document.querySelector('.profile > img');
        img.style.opacity='0';
    })
console.log(title);
    

// })


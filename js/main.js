// window.onload = function(){
    
//     container = document.querySelector('.container');
//     logo = document.querySelector('.logo');
//     logo.style.opacity = 1;
    
//     setTimeout(function(){
//         logo.style.opacity = 0;
//     }, 2000)

//     setTimeout(function(){
//         container.style.display='grid';
//         container.style.opacity=1;
//         logo.style.display = 'none';
//     }, 3200);

//  };

function titleHover(){
    title = document.querySelector('#big_title');
    title.addEventListener('mouseover',()=>{
        img = document.querySelector('.profile > img');
        img.style.opacity='1';
    })
    title.addEventListener('mouseout',()=>{
        img = document.querySelector('.profile > img');
        img.style.opacity='0';
    })
}

titleHover();
    


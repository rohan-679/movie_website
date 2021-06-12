// const arrows = document.querySelectorAll('.arrow');
// const movieLists = document.querySelectorAll('.movie-list');
// // console.log(movieLists);

// arrows.forEach((arrow,i)=>{
//     arrow.addEventListener("click",()=>{
//         movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
//     -270}px)`;
//     })
    
// })

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

const listImg = document.querySelector('.list-img')
const images = document.querySelectorAll('.list-img img')
const btnleft = document.querySelector('.btn-left')
const btnright = document.querySelector('.btn-right')
// --------------------------SLIDE-SHOW-------------------------
let i = 0 
const changeslide = () => {   
  if(i == images.length - 1){
    i=0
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }else{
    i++ 
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }
}
let autochangeslide = setInterval(changeslide,4000)
btnright.addEventListener('click',() => {
  clearInterval(autochangeslide)
  changeslide()
  autochangeslide = setInterval(changeslide,4000)
})
btnleft.addEventListener('click',() => {
  clearInterval(autochangeslide)
  if(i == 0){
    i = images.length-1
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }else{
    i--
    listImg.style.transform = `translateX(${1500*-1*i}px)`
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.index-item-'+ i).classList.add('active')
  }
  autochangeslide = setInterval(changeslide,4000)
})

// --------------------------MENU-CARTEGORY-------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
  menu.addEventListener("click",function(){
    event.preventDefault();
    itemsliderbar.forEach(function(item){
      if(item != menu){
        item.classList.remove("block")
      }
    })
    menu.classList.toggle("block")
  })
})


// --------------------------AD-SLIDE-SHOW-------------------------
const autoSlideFooter = document.querySelector('.auto-slide-footer');
const slides = autoSlideFooter.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}, 3000);
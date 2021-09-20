const removeText = document.querySelectorAll('.remove-text');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const headerHide = document.querySelector('.header-hide');
const counter= document.querySelectorAll('.counter');
const specialItem = document.querySelectorAll('.special-click')

// removing text after icon
removeText.forEach(function (item) {
  item.innerHTML = "";
})

// hamburger
hamburger.addEventListener('click', function () {
  nav.classList.toggle('responsive-nav');
  headerHide.classList.toggle('responsive-nav');
  hamburger.classList.toggle('close');
})


// counter
counter.forEach(function(i){
  let data = Number(i.getAttribute('data-count'));
  let num = Number(i.innerHTML);
  let a = data/100;

  let time = setInterval(function(){   
    if (num < data){
      num= num + a;
      num1= Math.floor(num);
      i.innerHTML= num1
    }
    else if (num == data){
      clearTime();
    }
  },10)

  function clearTime(){
    clearInterval(time);
  }
})


specialItem.forEach(function(i){
  i.addEventListener('click', function(e){
    let para = i.querySelector('.para');
    para.classList.toggle('hide-para')
  })
})
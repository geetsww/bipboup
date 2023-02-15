const button = document.querySelector('.header__toggle-nav')
const nav = document.querySelector('.header__nav')
button.addEventListener('click',()=>{
  nav.classList.toggle('display')
  if(button.textContent === "Menu"){
    button.textContent = 'Fermer'
  }
  else{

    button.textContent = 'Menu'
  }
})
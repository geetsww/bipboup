const dropdowns = document.querySelectorAll('.header__dropdown')

dropdowns.forEach(dropdown=>{
  const button = dropdown.querySelector('button')
  button.addEventListener('click',()=>{
    dropdown.classList.toggle('active')
  })
})
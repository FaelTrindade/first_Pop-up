const btn = document.getElementById('btn')
const container = document.getElementById('container')

const menu = document.getElementById('btn__menu')

btn.addEventListener('click',()=>{
    container.style.display= 'none'
    menu.style.display='block'
})

menu.addEventListener('click',()=>{
    container.style.display = 'block'
    menu.style.display='none'
    
})
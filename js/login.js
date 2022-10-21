var usuario = document.getElementById('username')
var password = document.getElementById('password')
const person = [
    {
        usua: 'same',
        contra: '1235'
    }
]
localStorage.setItem('usuario', JSON.stringify(person))
const enviar = document.querySelector('#enviar-ls')
enviar.addEventListener('click', ()=>{
    
    let user = localStorage.getItem('usuario')
    console.log(user)
})
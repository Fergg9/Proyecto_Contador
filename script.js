const incrementar = document.getElementById('increment')
const reiniciar = document.getElementById('reset')
const disminuir = document.getElementById('disminuir')
const valor = document.getElementById('valor')
valor.textContent=0

incrementar.addEventListener('click', ()=>{
    valor.textContent ++
    if(valor.textContent>=1){
        valor.classList.add('green');
        valor.classList.remove('red')
        valor.classList.remove('blue')
    }

})

reiniciar.addEventListener('click', ()=>{
    valor.textContent = 0
    if(valor.textContent == 0){
        valor.classList.add('blue')
    }
    })

disminuir.addEventListener('click', ()=>{
    valor.textContent --
    if(valor.textContent <0){
        valor.classList.add('red')
        valor.classList.remove('blue')
    }
    
})




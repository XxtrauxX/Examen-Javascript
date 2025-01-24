const botonpen = document.querySelector('#botonpen')
const botonpro = document.querySelector('#botonpro')
const botonfin = document.querySelector('#botonfin')
const contenpen= document.querySelector('#pendientestar')
const contenpro= document.querySelector('#progresotar')
const contenfin = document.querySelector('#fializadatar')
const BotonEdit = document.querySelector('.iner')



botonpen.addEventListener('click', ()=> {

    const nuevodiv = document.createElement('div')
    const BotonEdit= document.createElement('button')
    BotonEdit.textContent= "Editar"
    
    nuevodiv.classList.add('tarpen')
    nuevodiv.innerHTML= `
        <h1>Titulo:<button class="iner">Editar</button></h1>
        <h2>Descripcion:</h2>
        <h2>Fecha-Inicio:</h2>`
    

    contenpen.append(nuevodiv)
    contenpen.append(BotonEdit)

    BotonEdit.addEventListener('click', ()=> {
        alert("prueba perrin")
    })

})


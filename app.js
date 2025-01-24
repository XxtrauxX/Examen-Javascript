const botonpen = document.querySelector('#botonpen')
const botonpro = document.querySelector('#botonpro')
const botonfin = document.querySelector('#botonfin')
const contenpen= document.querySelector('#pendientestar')
const contenpro= document.querySelector('#progresotar')
const contenfin = document.querySelector('#fializadatar')
const BotonEdit = document.querySelector('.iner')



botonpen.addEventListener('click', ()=> {

    window.location.href = '/modulo-html/formulario.html'

    const nuevodiv = document.createElement('div')
    const BotonEdit= document.createElement('button')
    const BotonDes= document.createElement('button')
    const titulo = document.querySelector('#parrafo')
    BotonDes.textContent= "editar-descripcion"
    BotonEdit.textContent= "Editar"
    
    
    nuevodiv.classList.add('tarpen')
    nuevodiv.innerHTML= `
        <h1 id="parrafo" >Titulo:</h1>
        <h2>Descripcion:</h2>
        <h2>Fecha-Inicio:</h2>`;
    

    contenpen.append(nuevodiv)
    contenpen.append(BotonEdit)
    contenpen.append(BotonDes)

    BotonEdit.addEventListener('click', ()=> {
        window.location.href ='/modulo-html/formulario.html'

        
    })

})


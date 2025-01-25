const botonpen = document.querySelector('#botonpen')
const botonpro = document.querySelector('#botonpro')
const botonfin = document.querySelector('#botonfin')
const contenpen= document.querySelector('#pendientestar')
const contenpro= document.querySelector('#progresotar')
const contenfin = document.querySelector('#fializadatar')
const BotonEdit = document.querySelector('.iner')
const botonPintar = document.querySelector('#botonpenpin')
const botonPenel = document.querySelector('#botonpenel')
const botonPa = document.querySelector('#botonPA')
const botonpapro= document.querySelector('#botonproPA')
const botonpropin = document.querySelector('#botonpropin')



botonpapro.addEventListener('click', ()=> {

    num = prompt(alert("que numero desea pasar"))

    console.log(num)


    fetch(`http://localhost:3000/pendientes/${num}`)
    .then((res) => res.json())
    .then((datos)=> {
       console.log(datos)

       const nuevopros= document.createElement('div')
       nuevopro.classList.add('tarpen')

       nuevopro.innerHTML = `<br>
               
       <h1>Titulo:${datos.title}</h1>
       <h1>Descripcion:${datos.descrip}</h1>
       <h1>Fecha-inicio:${datos.fechainicio}</h1>
       <h1>Fecha-final:${datos.fechafinal}</h1>
       
       <br>
       <br>`

       contenfin.append(nuevopros)
    })
})


botonPa.addEventListener('click', () => {

     num = prompt(alert("que numero desea pasar"))

     console.log(num)


     fetch(`http://localhost:3000/pendientes/${num}`)
     .then((res) => res.json())
     .then((datos)=> {
        console.log(datos)

        const nuevopro= document.createElement('div')
        nuevopro.classList.add('tarpenn')

        nuevopro.innerHTML = `<br>
                
        <h1>Titulo:${datos.title}</h1>
        <h1>Descripcion:${datos.descrip}</h1>
        <h1>Fecha-inicio:${datos.fechainicio}</h1>
        <h1>Fecha-final:${datos.fechafinal}</h1>
        
        <br>
        <br>`

        contenpro.append(nuevopro)


        const  titulo = datos.title
        const descrip = datos.descrip

        const data = {
            title: titulo,
            descrip: descrip
        
            };
    
    
            
            fetch("http://localhost:3000/progreso/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            ,
            
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            })
            .catch((error) => {
            console.error(error);
            });
     })



   

})



botonpro.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = 'modulo-html/formulario2.html'
    alert("prueba")
})


botonPenel.addEventListener('click', ()=> {

    alert("prueba mi pez")
})


botonPintar.addEventListener('click', ()=> {
    fetch(`http://localhost:3000/pendientes`)
        .then((res) => res.json())
        .then((datos) => {
            console.log(datos)
            //const nuevosdivis= document.createElement('div')
            //nuevosdivs.classList.add('tarpen')
            datos.forEach(Elemento => {
                 const nuevosdivis = document.createElement('div')

                 nuevosdivis.classList.add('tarpen')
                nuevosdivis.innerHTML = `
                <br>
                
                <h1>Titulo:${Elemento.title}</h1>
                <h1>Descripcion:${Elemento.descrip}</h1>
                <h1>Fecha-inicio:${Elemento.fechainicio}</h1>
                <h1>Fecha-final:${Elemento.fechafinal}</h1>
                
                <br>
                <br>` 


                contenpen.append(nuevosdivis)

            });

            //contenpen.append(nuevosdivis)
        })
})


//pintarTarjetas()


function pintarTarjetas() {
    
}

botonpen.addEventListener('click', ()=> {

    window.location.href = '/modulo-html/formulario.html'

    const nuevodiv = document.createElement('div')
    const BotonEdit= document.createElement('button')
    const BotonDes= document.createElement('button')
    const titulo = document.querySelector('#parrafo')
    BotonDes.textContent= "editar-descripcion"
    BotonEdit.textContent= "Editar"
    
    
    //nuevodiv.classList.add('tarpen')
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


botonpropin.addEventListener('click', ()=> {
    fetch(`http://localhost:3000/progreso`)
    .then((res) => res.json())
    .then((datos) => {
        console.log(datos)
        //const nuevosdivis= document.createElement('div')
        //nuevosdivs.classList.add('tarpen')
        datos.forEach(Elemento => {
             const nuevoproto = document.createElement('div')

             nuevosdivis.classList.add('tarpen')
            nuevosdivis.innerHTML = `
            <br>
            
            <h1>Titulo:${Elemento.title}</h1>
            <h1>Descripcion:${Elemento.descrip}</h1>
            <h1>Fecha-inicio:${Elemento.fechainicio}</h1>
            <h1>Fecha-final:${Elemento.fechafinal}</h1>
            
            <br>
            <br>` 


            contenpro.append(nuevoproto)

        });

        //contenpen.append(nuevosdivis)
    })
})

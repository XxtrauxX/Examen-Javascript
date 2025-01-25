const form = document.querySelector('#formulario')
const botonvol= document.querySelector('#regreso')


botonvol.addEventListener('click', (e)=> {
    e.preventDefault()
   alert("prueba")
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const titulo = document.querySelector('#titulo').value
    const descripcion = document.querySelector('#descripcion').value
    const fechaini = document.querySelector('#fechaini').value
    const fechafin = document.querySelector('#fechafin').value

    console.log(titulo)
    console.log(descripcion)

    const data = {
        title: titulo,
        descrip: descripcion,
        fechainicio: fechaini,
        fechafinal: fechafin
    }


    fetch(`http://localhost:3000/progreso`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data)
        })
        .catch((error)=> {
            console.error(error)
        })

})

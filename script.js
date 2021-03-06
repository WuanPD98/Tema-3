let Nombre;
let Diagnostico;
let pacientes = [];
let tablaPacientes = document.getElementById("Pacientes");

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    Insertar();
    Leer();
    document.getElementById("form").reset();
})

function Insertar(){
    Nombre = document.getElementById("nombre").value
    Diagnostico = document.getElementById("diagnostico").value

    if(Nombre == '' || Diagnostico == ''){
        alert("Por favor rellena todos los datos del paciente")
    }else{
        pacientes.push({
            Nombre, Diagnostico
        })
    }
}

function Leer(){
    tablaPacientes.innerHTML = '';
    tablaPacientes.innerHTML += `
        <tr class="table-primary">
            <th>#</th>
            <th>Nombre</th>
            <th>Diagnostico</th>
            <th>Operaciones</th>
        </tr>
    `

    for(let i = 0; i < pacientes.length; i++){
        tablaPacientes.innerHTML += `
            <tr>
                <td class="espacio"> ${i+1} </td>
                <td class="espacio"> ${pacientes[i].Nombre} </td>
                <td class="espacio"> ${pacientes[i].Diagnostico} </td>
                <td class="espacio">
                    <button class="btn btn-info" Onclick="Modificar(${i})"><i class="fas fa-user-edit"></i> Editar</button>
                    <button class="btn btn-danger" Onclick="Eliminar(${i})"><i class="fas fa-trash"></i> Eliminar</button>
                </td>
            </tr>
        `
    }
}

function Modificar(posicion){
    tablaPacientes.innerHTML = '';
    tablaPacientes.innerHTML += `
        <tr class="table-primary">
            <th>#</th>
            <th>Nombre</th>
            <th>Diagnostico</th>
            <th>Operaciones</th>
        </tr>
    `

    for(let i = 0; i < pacientes.length; i++){
        if(i == posicion){
            tablaPacientes.innerHTML += `
            <tr>
                <td class="espacio"> ${i+1} </td>
                <td class="espacio"> <input class="form-control espacio" id="nuevoNombre" value="${pacientes[i].Nombre}"></input></td>
                <td class="espacio"><input class="form-control espacio" id="nuevoDiagnostico" value="${pacientes[i].Diagnostico}"></input></td>
                <td class="espacio">
                    <button class="btn btn-success" Onclick="ConfirmarModificar(${i})"><i class="fas fa-user-edit"></i> Confirmar</button>
                    <button class="btn btn-warning" Onclick="Leer()"><i class="fas fa-times"></i> Cancelar</button>
                </td>
            </tr>
            `
        } else {
            tablaPacientes.innerHTML += `
                <tr>
                    <td class="espacio"> ${i+1} </td>
                    <td class="espacio"> ${pacientes[i].Nombre} </td>
                    <td class="espacio"> ${pacientes[i].Diagnostico} </td>
                    <td class="espacio"></td>
                </tr>
            `
        }
    }
}

function ConfirmarModificar(posicion){
    Nombre = document.getElementById("nuevoNombre").value
    Diagnostico = document.getElementById("nuevoDiagnostico").value

    if(Nombre == '' && Diagnostico == ''){
        alert("Todos los campos deben estar llenos")
    } else {
        pacientes[posicion].Nombre = document.getElementById("nuevoNombre").value;
        pacientes[posicion].Diagnostico = document.getElementById("nuevoDiagnostico").value;
        Leer();
    }
}

function Eliminar(posicion){
    pacientes.splice(posicion, 1);
    Leer()
}
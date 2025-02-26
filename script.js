
const personas = [];
document.getElementById("formPersonas")
.addEventListener("submit",function(event){
    event.preventDefault();
    const persona={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value,
        fecha: document.getElementById("fecha").value,
        color: document.getElementById("color").value,
        archivo: document.getElementById("archivo").value,
        condiciones: document.getElementById("condiciones").checked ? "Si" : "No",
        musica: document.querySelector('input[name="musica"]:checked').value
    };

    agregarFila(persona);
    this.reset();
});
function agregarFila(persona) {
    const tabla = document.getElementById("tablaPersonas").getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow(tabla.rows.length);

    nuevaFila.innerHTML = `
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad}</td>
        <td>${persona.genero}</td>
        <td>${persona.email}</td>
        <td>${persona.telefono}</td>
        <td>${persona.direccion}</td>
        <td>${persona.fecha}</td>
        <td><input type="color" value="${persona.color}" disabled></td>
        <td>${persona.archivo}</td>
        <td>${persona.condiciones}</td>
        <td>${persona.musica}</td>
    `;
}
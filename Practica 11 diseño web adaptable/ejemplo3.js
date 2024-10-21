//funcion que recibe datos de un usuario y separa el resto de la informacion
function procesarusuario(nombre,edad, ...otrosdatos){
    let usuarioformateado = {
        nombre,
        edad,
        infoadicional: {...otrosdatos}
    };
    return usuarioformateado;
}

//simulamos datos de una api
let usuario = procesarusuario("vanessa", 24, "ingenieria", "el salvador", "marzo 2024")

console.log(usuario);
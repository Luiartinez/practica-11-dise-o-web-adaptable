let estudiantes = [
    {nombre: "luis", nota : 9},
    {nombre: "alexander", nota : 8},
    {nombre: "elias", nota :7}
];

//creando una copia para crear un spread
let estudiantesmodificados = estudiantes.map(estudiante =>
    estudiante.nombre === "elias"
?{...estudiante, nota: 9}
:{...estudiante}
);

console.log(estudiantesmodificados);
console.log(estudiantes);

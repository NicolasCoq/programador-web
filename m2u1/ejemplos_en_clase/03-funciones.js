const saludo = function(nombre){
    return `Hola ${nombre}`
}

// console.log(saludo('Nicolas'))

const nuevosaludo = (nombre, apellido) => {
    return `Hola ${nombre} ${apellido}`
}

console.log(nuevosaludo('Nicolas','Coquoz'))
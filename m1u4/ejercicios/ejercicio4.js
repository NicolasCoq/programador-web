const numeros = [15, 27, 9, 20, 32, 55]

let mayor = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log('El número mayor es:',mayor)
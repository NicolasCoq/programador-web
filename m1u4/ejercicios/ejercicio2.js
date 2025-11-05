let metros = 10000

if (metros <= 1000) {
    console.log('a pie')
}
else if (metros > 1000 && metros <= 10000) {
    console.log('en bicicleta')
}
else if (metros > 10000 && metros <= 30000) {
    console.log('en colectivo')
}
else if (metros > 30000 && metros <= 100000) {
    console.log('en auto')
}
else if (metros > 100000) {
    console.log('en avion')
}
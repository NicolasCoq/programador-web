cuadro = document.getElementById('texto');

cuadro.addEventListener("keyup",function(){
    let contador = cuadro.value.length;

    document.getElementById('contador').innerHTML = contador
})
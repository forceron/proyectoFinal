var totalTiempo=60;
function updateReloj()
    {
        document.getElementById('CuentaAtras').innerHTML = totalTiempo+" segundos";
        /* Restamos un segundo al tiempo restante */
        totalTiempo-=1;
        /* Ejecutamos nuevamente la función al pasar 1000 milisegundos (1 segundo) */
        setTimeout("updateReloj()",1000);	
        
    }
    window.onload=updateReloj;
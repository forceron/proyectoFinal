var contador=1;
var direccion="norte";
var vidas=3;
var personaje= document.getElementById("personaje");
var vidasImg= document.getElementById("vidas");
var mover=document.getElementById("mover");
var limNorte=100;
var limSur=500;
var limOriente=1000;
var limOccidente=200;
var mapa=document.getElementById("cuadrado");
var puerta=document.getElementById("puerta");
puerta.style.top=limNorte+50+"px";
puerta.style.left=limOccidente+30+"px";
puerta.style.width= limOriente-limOccidente+"px";
var puertas=[document.getElementById("puerta1"),document.getElementById("puerta2"),document.getElementById("puerta3"),document.getElementById("puerta4"),document.getElementById("puerta5"),document.getElementById("puerta6"),document.getElementById("puerta7"),document.getElementById("puerta8")]


mapa.style.width= 30+limOriente-limOccidente+"px";
mapa.style.height= 50+limSur-limNorte+"px";
mapa.style.left= limOccidente+"px" ;
mapa.style.top = limNorte +"px" ;
personaje.src="img/"+direccion+contador+".png";
mover.style.left= 600+"px" ;
mover.style.top = 480+"px" ;
vidasImg.src="img/Lives"+vidas+".png";
window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
       var tecla = objeto.which;
       var situacionY = mover.offsetLeft;
       var situacionX = mover.offsetTop;
       var pos;
        switch (tecla){
            case 37 :   
               if(direccion=="occidente"){
                  contador++;
                  if(contador>9){
                    contador=1;
                  }
                }else{
                  direccion="occidente";
                  contador=1;
                }
                pos=situacionY-22;
                if(pos<limOccidente){
                  pos=limOccidente;
                }
                mover.style.left =pos+"px" ;

                  break;


            case 38 :
                if(direccion=="norte"){
                  contador++;
                  if(contador>9){
                    contador=1;
                  }
                }else{
                  direccion="norte";
                  contador=1;
                }

                pos=situacionX-22;
                if(pos<limNorte){
                  pos=limNorte;
                }
                mover.style.top =pos+"px" ;
                break;
            case 39 : 
               if(direccion=="oriente"){
                  contador++;
                  if(contador>9){
                    contador=1;
                  }
                }else{
                  direccion="oriente";
                  contador=1;
                }
                pos=situacionY-18;
                if(pos>limOriente){
                  pos=limOriente;
                }
                mover.style.left =pos+"px" ;
              break;
            case 40 :
           if(direccion=="sur"){
                  contador++;
                  if(contador>9){
                    contador=1;
                  }
                }else{
                  direccion="sur";
                  contador=1;
                }

                pos=situacionX-18;
                  if(pos>limSur){
                  console.log("entro al if");
                  pos=limSur;
                }
                mover.style.top =pos+"px" ;


                break;
          case 69:
           
              
              if(situacionX<=230 && situacionX>=180){

                console.log("ento al if");
                var pos=0;
                var intevalo=260;
                console.log(situacionY);
                while(situacionY>intevalo+50){
                  intevalo+=100;
                  pos++;
                }
                console.log("salio del while");
                console.log(intevalo);
                //if(situacionX>intevalo){

                  abrirPuerta(pos);
                //}

              }
              
              
              //animacionPuerta(3);
              //window.setTimeout(abrirPuerta(3,0),10000); 
              break;
        default:alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
        if(vidas==0){
            alert("GAME OVER");
        }
        personaje.src="img/"+direccion+contador+".png";
    }
    function abrirPuerta(num){
      puertas[num].src="img/puerta9.png";
    }
    contadorPuerta=1;
   
    

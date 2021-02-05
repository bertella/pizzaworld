/*  menu responsive  */
var     btnMenuOpen = document.getElementById("btnMenuOpen"),
        btnMenuClose = document.getElementById("btnMenuClose"),
        menuResponsive = document.getElementById("menuBar")
        enlaces = document.getElementById("enlaces")
        ;

        /* CLICL ABRIR */
        
        btnMenuOpen.addEventListener("click",function()
        {   
            menuResponsive.classList.add("active");
        }) ;

        /* CLICK CERRAR  */

        btnMenuClose.addEventListener("click",function(){
            menuResponsive.classList.remove("active")
        });

        /* CERRAR MENU CON ELEMENTOS DE ENLACES  */

        enlaces.addEventListener("click",function(){
            menuResponsive.style.transitionDelay = "0.5s"
            menuResponsive.classList.remove("active");
        });
         
        /* slider productos */
        var contenedor = document.querySelector('.slider'),
        btnIzquierdo = document.getElementById("btn-izquierda"),
        btnDerecho = document.getElementById("btn-derecha");

        /* llamar EVENTO PARA EL BOTON DERECHO */

        btnDerecho.addEventListener("click",function(){
            contenedor.scrollLeft += contenedor.offsetWidth;

        });
        /*  EVENTO PARA EL BOTON IZQUIERDO */

        btnIzquierdo.addEventListener("click",function(){
            contenedor.scrollLeft -= contenedor.offsetWidth;

        });



        /* VALIDACION DE FORMULARIO */

        var formulario = document.getElementById("formulario");

        function validar(e){
        var inputNombre= document.getElementById("nombre"), 
        inputEmail=document.getElementById("nombre"),
        inputComent=document.getElementById("comentarios"),
        alertSuccess=document.getElementById("alertSuccess"),
        alertError=document.getElementById("alertError");


        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComent.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function(){
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            },2000);
     
        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function(){
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            },2000);

            inputNombre.value="";
            inputEmail.value="";
            inputComent.value="";

        }
    }

        /* EVENTOS DEL FORMULARIO */
        formulario.addEventListener("submit",validar);

     /* BOTON SCROLL TOP */

     var btnTop=document.getElementById("btn-top"),
        logo = document.getElementById("logo");
         
     /* DETECTAMOS EL SCROLL EN NUESTRA PAGINA WEB */
     window.addEventListener("scroll", function(){
        var  scroll = document.documentElement.scrollTop,
             fullSize = document.documentElement.offsetHeight,
             sizeVP = document.documentElement.clientHeight;
   
   
        if (scroll > 100) {
             btnTop.classList.add("show");
        }else{
             btnTop.classList.remove("show");
        }
   
        // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
        if (fullSize == (scroll + sizeVP)) {
            btnTop.classList.add("scrollFinal"); 
        }else{
             btnTop.classList.remove("scrollFinal");
        }
   });
   // DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
    window.scrollTo(0,0);
});

// DETECTAR EVENTO CLIC EN EL LOGO
logo.addEventListener("click", function () {
    window.scrollTo(0,0);
});
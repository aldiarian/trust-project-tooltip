(()=>{

    // variables
    let tooltip = document.getElementById('ue-c_tooltip-trust'),
        infoButton = document.getElementById('info-trust-button'),
        mainBox = document.querySelector('.ue-c-tooltip-trust__main'),
        box = document.querySelector('.ue-c-tooltip-trust__box'),
        mq = window.matchMedia("(max-width: 380px)");

    // funciones
    function accesibilidad() {
        
        infoButton.getAttribute('aria-expanded') === 'false'  
            ? infoButton.setAttribute('aria-expanded', 'true' )  
            : infoButton.setAttribute('aria-expanded', 'false' ) ;

        mainBox.getAttribute('tabindex') == "-1" 
            ? mainBox.setAttribute('tabindex' , "0" ) 
            : mainBox.setAttribute('tabindex' , "-1" ) ;
    }

 
    function outTooltip(evnt) {

      

        //posiciono el mensaje debajo del icono
        let toolPosition = tooltip.getBoundingClientRect();
        mainBox.style.top  = (toolPosition.top + 30 + "px");

        //compruebo si el texto del kicker es muy largo, si el tooltip no cabe en la pantalla se coloca a la derecha
        if(toolPosition.right > ( window.innerWidth / 2 ) && (mq.matches) ){
            mainBox.style.right = "10px";
            box.classList.add('small_viewport')
        }else{
            mainBox.style.left = (toolPosition.left - 65 + "px");
        }

          //compruebo si se ha clicado en el boton
          if ( evnt.target.classList.contains("ue-c-tooltip-trust__button") || evnt.target.tagName === "rect" || evnt.target.tagName === "path") {
            mainBox.classList.toggle('ue-c-tooltip-trust--open');
            accesibilidad();
        }else{
            if (mainBox.classList.contains('ue-c-tooltip-trust--open')) mainBox.classList.remove('ue-c-tooltip-trust--open');
        }

    }


    //escuchando el evento click para saber si se está clicando en el boton o fuera de el
    document.addEventListener('click', outTooltip );
    //escuchando el evento scroll de la página para cerrar el tooltip
    document.addEventListener('scroll', () => {
        if (mainBox.classList.contains('ue-c-tooltip-trust--open')) mainBox.classList.remove('ue-c-tooltip-trust--open') ;
    } );



})();

   


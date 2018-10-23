(()=>{

    // variables
    let tooltip = document.getElementById('ue-c-tooltip_trust'),
        mainBox = tooltip.querySelector('.ue-c-tooltip-trust__main'),
        infoButton = document.getElementById('info_button'),
        box = document.querySelector('.ue-c-tooltip-trust__box'),
        mq = window.matchMedia("(max-width: 390px)");
   
        console.log(box);
        

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

        //compruebo si se ha clicado en el boton
        if ( evnt.target.classList.contains("ue-c-tooltip-trust__button") || evnt.target.tagName === "rect" || evnt.target.tagName === "path") {
            mainBox.classList.toggle('is-open');
            accesibilidad();
        }else{
            if (mainBox.classList.contains('is-open')) mainBox.classList.remove('is-open');
        }

        //posiciono el mensaje debajo del icono
        let toolPosition = tooltip.getBoundingClientRect();
        
        mainBox.style.top  = (toolPosition.top + 30 + "px");
        
        
        toolPosition.right > ( window.innerWidth / 2 ) 
            ? mainBox.style.right = "10px"
            : mainBox.style.left = (toolPosition.left - 65 + "px");

    }


    //escuchando el evento click para saber si se está clicando en el boton o fuera de el
    document.addEventListener('click', outTooltip );
    //escuchando el evento scroll de la página para cerrar el tooltip
    document.addEventListener('scroll', () => {
        if (mainBox.classList.contains('is-open')) mainBox.classList.remove('is-open') ;
    } );



})();

   


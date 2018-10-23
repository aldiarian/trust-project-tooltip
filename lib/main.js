(()=>{

    // variables
    let tooltip = document.getElementById('ue-c-tooltip_trust');
    let mainBox = tooltip.querySelector('.ue-c-tooltip-trust__main');
    let infoButton = document.getElementById('info_button');
   
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
        let boxPosition = tooltip.getBoundingClientRect();
        let mainPosition = mainBox.getBoundingClientRect();

        mainBox.style.top  = (boxPosition.top + 30 + "px");
        mainBox.style.left = (boxPosition.left - 65 + "px");
        
        //compruebo si se ha clicado en el boton
        if ( evnt.target.classList.contains("ue-c-tooltip-trust__button") || evnt.target.tagName === "rect" || evnt.target.tagName === "path") {
            mainBox.classList.toggle('is-open');
            accesibilidad();
        }else{
            mainBox.classList.remove('is-open');
        }

    }


    //escuchando el evento click para saber si se está clicando en el boton o fuera de el
    document.addEventListener('click', outTooltip );
    //escuchando el evento scroll de la página para cerrar el tooltip
    document.addEventListener('scroll', () => {
        if (mainBox.classList.contains('is-open')) {
            mainBox.classList.remove('is-open')
        }
    } );

})();

   


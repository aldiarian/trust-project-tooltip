(()=>{

        // funciones
        function accesibilidad(infoButton, tooltip) {
        
            infoButton.getAttribute('aria-expanded') === 'false'  
                ? infoButton.setAttribute('aria-expanded', 'true' )  
                : infoButton.setAttribute('aria-expanded', 'false' ) ;
        
            tooltip.getAttribute('tabindex') == "-1" 
                ? tooltip.setAttribute('tabindex' , "0" ) 
                : tooltip.setAttribute('tabindex' , "-1" ) ;
        }
        
        
        function outTooltip(evnt) {
            
        //compruebo si se ha clicado en el boton
        if ( evnt.target.classList.contains("info-trust__button") || evnt.target.tagName === "rect" || evnt.target.tagName === "path") {
            let elemento = evnt.target.id;
            let infoButton = document.getElementById(elemento);
            let tooltip = document.querySelector(`[data-trigger=${evnt.target.id}]`);
            tooltip.classList.toggle('ue-c-tooltip-trust--open');
            //posiciono el mensaje debajo del icono
            let infoButtonPosition = infoButton.getBoundingClientRect();
            tooltip.style.left  = ((infoButtonPosition.x - (tooltip.offsetWidth / 2)) + (infoButtonPosition.width / 2)  + "px");
            tooltip.style.top  = (infoButtonPosition.y + infoButtonPosition.height + 15 + "px" );
            //funcionalidades de accesibilidad
            accesibilidad(infoButton, tooltip);
        }else{
            let tooltips = document.querySelectorAll('.ue-c-tooltip-trust');
            tooltips.forEach(element => {
                if (element.classList.contains('ue-c-tooltip-trust--open')) element.classList.remove('ue-c-tooltip-trust--open');
            });
        }


    }


    //escucho el evento click para saber si se está clicando en el boton o fuera de el
    document.addEventListener('click', outTooltip );

    //escucho el evento scroll de la página para cerrar el tooltip
    document.addEventListener('scroll', () => {
        let tooltips = document.querySelectorAll('.ue-c-tooltip-trust');
        tooltips.forEach(element => {
            if (element.classList.contains('ue-c-tooltip-trust--open')) element.classList.remove('ue-c-tooltip-trust--open') ;
        });
    } );

})();

   


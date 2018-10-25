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
            let infoButtonPosition = infoButton.getBoundingClientRect();
            let tooltip = document.querySelector(`[data-trigger=${evnt.target.id}]`);
            
            tooltip.classList.toggle('ue-c-tooltip-trust--open');

            console.log(infoButton);
            

            switch (tooltip.dataset.position) {
                case "bottom":
                    //posiciono el mensaje debajo del botón
                    // tooltip.style.left  = ((infoButtonPosition.x - (tooltip.offsetWidth / 2)) + infoButtonPosition.width + "px");
                    tooltip.style.left  = infoButtonPosition.x  - (infoButton.clientWidth - tooltip.clientWidth) + "px";
                    tooltip.style.top  = (infoButtonPosition.y + infoButtonPosition.height + 15 + "px" );
                    break;
                case "top":
                    //posiciono el mensaje arriba del botón
                    tooltip.style.left  = ((infoButtonPosition.x - (tooltip.offsetWidth / 2)) + infoButtonPosition.width + "px");
                    tooltip.style.top  = ((infoButtonPosition.y - tooltip.offsetHeight) - 15 + "px" );
                    break;
                case "left":
                    //posiciono el mensaje a la drch del botón
                    // tooltip.style.left  =( ( infoButtonPosition.x - tooltip.offsetWidth) - infoButton.clientWidth + "px");
                    tooltip.style.left  =( infoButtonPosition.x - tooltip.offsetWidth) - 5 + "px";
                    tooltip.style.top  = ((infoButtonPosition.y -( tooltip.offsetHeight /2) ) + infoButtonPosition.height/2  + "px" );
                    break;
                case "right":
                    //posiciono el mensaje a la izq del botón
                    tooltip.style.left  =  infoButtonPosition.x + infoButtonPosition.width + infoButton.clientWidth + 5 + "px";
                    tooltip.style.top  = ((infoButtonPosition.y -( tooltip.offsetHeight /2) ) + infoButtonPosition.height/2  + "px" );
                    break;
                default:
                    break;
            }
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

   


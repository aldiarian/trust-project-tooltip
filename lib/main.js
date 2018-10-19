(()=>{

    // variables
    let tooltip = document.getElementById('ue-c-tooltip_trust');
    let tooltipBox = tooltip.querySelector('.ue-c-tooltip-trust__main');
    let container = document.querySelector('.ue-c-tooltip-trust__container')
    let infoButton = document.getElementById('info_button');
   
    // funciones
    function accesibilidad() {
        infoButton.getAttribute('aria-expanded') == 'false' ? 
            infoButton.setAttribute('aria-expanded', 'true' )  : 
            infoButton.setAttribute('aria-expanded', 'false' ) ;

        tooltipBox.getAttribute('tabindex') == "-1" ?
            tooltipBox.setAttribute('tabindex' , "0" ) : 
            tooltipBox.setAttribute('tabindex' , "-1" ) ;
    }

 
    function outTooltip(evnt) {
        accesibilidad();
        let boxPosition = container.getBoundingClientRect();
        
        //posiciono el mensaje debajo del icono
        tooltipBox.style.top  = (boxPosition.top + 30 + "px");
        tooltipBox.style.left = (boxPosition.left - 65 + "px");

        evnt.target.classList.contains("ue-c-tooltip-trust__container") ?
            tooltipBox.classList.toggle('is-open') : tooltipBox.classList.remove('is-open');
    }


    //evento click en el icono
    document.addEventListener('click', outTooltip );
    //desaperece el mensaje cuando se hace scroll 
    document.addEventListener('scroll', () => tooltipBox.classList.remove('is-open') );

})();

   


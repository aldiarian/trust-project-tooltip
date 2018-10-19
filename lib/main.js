window.onload = function() {
    // variables
    var tooltip = document.getElementById('ue-c-tooltip_trust');
    var tooltipBox = tooltip.querySelector('.ue-c-tooltip-trust__main');
    var container = document.querySelector('.ue-c-tooltip-trust__container')

    // funciones
    function outTooltip(evnt) {
       
        let boxPosition = container.getBoundingClientRect();
        
        tooltipBox.style.top  = (boxPosition.top + 30 + "px");
        tooltipBox.style.left = (boxPosition.left - 65 + "px");

        evnt.target.classList.contains("ue-c-tooltip-trust__container") ?
            tooltipBox.classList.toggle('is-open') : tooltipBox.classList.remove('is-open');
    }

    //posiciono el mensaje debajo del icono

    //evento click en el icono
    document.addEventListener('click', outTooltip );
    //desaperece el mensaje cuando se hace scroll 
    document.addEventListener('scroll', () => tooltipBox.classList.remove('is-open') );

   
};

(()=>{

        
        function outTooltip(evnt) {
            console.log(evnt.target);
        }


    //escucho el evento click para saber si se está clicando en el boton o fuera de el
    document.addEventListener('click', outTooltip );

   

})();

   


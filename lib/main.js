(() => {
	let infoButton = document.getElementById("info-trust-button");
	let tooltip = document.getElementById("ue-c_tooltip-trust");
	let mq = window.matchMedia("(max-width: 768px)");
	// funciones
    
	function accesibilidad() {
        infoButton.getAttribute("aria-expanded") === "false"
        ? infoButton.setAttribute("aria-expanded", "true")
        : infoButton.setAttribute("aria-expanded", "false");
        
		tooltip.getAttribute("tabindex") == "-1"
        ? tooltip.setAttribute("tabindex", "0")
        : tooltip.setAttribute("tabindex", "-1");
	}
    
	function toggleTooltip(evnt) {
        // calculo la posición del boton en este momento
        let infoButtonPosition = infoButton.getBoundingClientRect();
		//compruebo si se ha clicado en el boton
		if (evnt.target.classList.contains("info-trust__button")) {
			let elemento = evnt.target.id;
			tooltip.classList.toggle("ue-c-tooltip-trust--open");
			tooltip.style.left = infoButtonPosition.x - 65 + (infoButton.offsetWidth/2) + "px";
			tooltip.style.top = infoButtonPosition.y + infoButtonPosition.height + "px";

			//funcionalidades de accesibilidad
            accesibilidad();
            
		} else {
			if (tooltip.classList.contains("ue-c-tooltip-trust--open")) tooltip.classList.remove("ue-c-tooltip-trust--open");
		}
	}

	//escucho el evento click
<<<<<<< HEAD
	document.addEventListener("click", toggleTooltip);
=======
	document.addEventListener("click", outTooltip);
>>>>>>> cdeae841361cf14f36982508e903d0122eeab99a

	//escucho el evento scroll de la página para cerrar todos los tooltips
	document.addEventListener("scroll", () => {
		if (tooltip.classList.contains("ue-c-tooltip-trust--open")) {
			tooltip.classList.remove("ue-c-tooltip-trust--open");
			accesibilidad();
		}
	});
})();

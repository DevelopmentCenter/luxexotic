window.theme = window.theme || {};

window.theme.accordion = function() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].addEventListener("click", function() {
	        this.classList.toggle("active");
	        var btnPanel = this;
	        var panel = this.nextElementSibling;
	        $(panel).slideToggle( "fast", function() {
	        	if (panel.style.display === "block") {
	        		$(btnPanel).children("i").attr("class", "fas fa-angle-up")
	        	} else {
	        		$(btnPanel).children("i").attr("class", "fas fa-angle-down")
	        	}
	        } );


	    });
	}
}

window.theme.closeAccordion = function() {
	
	setTimeout(function(){ $(".a-panel").slideToggle("slow"); }, 1000);
}



$(function() {
	window.theme.accordion();
	window.theme.closeAccordion();

	$body = $('body');
	// Add or remove from the quantity
    $body.on('click', '.qty-adjust', function() {
      

      var $el = $(this),
          line = $el.data('line'),
          $qtySelector = $el.siblings('.qty-num'),
          qty = parseInt($qtySelector.val().replace(/\D/g, ''));

      

      // Add or subtract from the current quantity
      if ($el.hasClass('qty--plus')) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 0) qty = 0;
      }
      
       $qtySelector.val(qty);
    });
});
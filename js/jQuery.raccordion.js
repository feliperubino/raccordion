(function(){

	jQuery.fn.rAccordion = function(options){
		var defaults = {
			animation:'fade',
			time:'200'
		}
		var options = $.extend(defaults, options);

		return this.each(function(){
			var obj = jQuery(this);

			//Adicionar estilo
			obj.addClass("rAccordion");

			obj.find('li > a').click(function() {
				//Caso seja animação de fade
				if(options.animation == 'fade'){
					jQuery(this).parent().find(".conteudo").fadeToggle(options.time);
				} else if(options.animation == 'slide'){
					jQuery(this).parent().find(".conteudo").slideToggle(options.time);
				}
			});
		});
	}

})(jQuery);
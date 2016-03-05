
$(document).ready(function(){
	$("li:not(:has(ul))").addClass("b-sub");
	$("li:has(ul)").addClass("o-sub").click(function(){
		if (this==event.target) {
		if ($(this).children().is(":visible")) {
					$(this).children().slideUp('fast', function() {
						$(this).parent().removeClass()
							.addClass('subject');
					});
				}else{
					$(this).children().slideDown('fast', function() {
						$(this).parent().removeClass()
							.addClass('o-sub');
					});
				};
	};
  });
});


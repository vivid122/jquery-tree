$(document).ready(function(){
	$("li").children().hide();
	$("li:has(ul)").addClass("subject");
	$("li ul").addClass("b-sub");
	$("li").click(function(){
		if ($(this).is(".subject")) {
			$(this).children().show();
			$(this).removeClass("subject").addClass("o-sub");
		}else if ($(this).is(".o-sub")) {
			$(this).children().hide();
			$(this).removeClass("o-sub").addClass("subject");
		};
	});
});


// $(document).ready(function () {
//     $("li ul").addClass("b-sub");
//     $("li:has:(ul)").addClass("subject");
//     $("li").click(function(){
//     	if ($(this).children().is(":visible")) {
//     		$(this).children().hide("fast",function(){
//     			$(this).parent.class("subject");
//     		});
//     	}else{
//     		$(this).children().slideDown("fast",function(){
//     			$(this).parent().removeClass("subject").addClass("o-sub");
//     		});
//     	};
//     })
// 	 });



// $(document).ready(function(){
// 	$("li:has(ul)").addClass("subject");
// 	$("li ul").addClass("b-sub");
// 	$("li").click(function(){
// 		$(this).children().toggle();
// 		if ($(this).is(".subject")) {
// 			$(this).class("o-sub");
// 		}else if ($(this).is(".o-sub")) {
// 			$(this).class("subject");
// 		};
// 	});
// });





// $(document).ready(function(){
// 	$("li:has(ul)").addClass("subject");
// 	$("li ul").addClass("b-sub");
// 	$(".subject").click(function(){
// 		if ($(this).children.is(":visible")){
// 			$(this).children().hide("fast").display("none");
// 			$(this).class("subject");
// 		}else{
// 			$(this).children().show("fast").display("visible");
// 			$(this).class("o-sub");
// 		};
// 	});
// });

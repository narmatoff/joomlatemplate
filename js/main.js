<!--Scroll_TOP-->
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
<!--END_Scroll_TOP-->

<!--Scroll_to_comments-->
$('.comments_count_link').click(function(){
	$("html, body").animate({ scrollTop:$(".content_wrapper_comment").offset().top }, 600);
	return false;
});
<!--END_Scroll_to_comments-->

<!--validation form required-->
if (!Modernizr.input.required){
	$('form').submit(function(){
			var validData =true;
			$('[required]').each(function () {
				if (($(this).attr('required') !== false) &&
					($(this).val() == "")) {
					$(this).focus();
					alert($(this).attr('name') + "- обязательное поле!");
					validData = false;
					return false;
				}
			});
		return validData;
	});
}
<!--END_validation form required-->


<!--comments_support placeholder in old browsers for comments-->
if (!Modernizr.input.placeholder) {
	$(".comments_placeholder_support").focus(function() {
		if ($(".comments_placeholder_support").val()== $(".comments_placeholder_support").attr('placeholder')) {
			$(".comments_placeholder_support").val("");
		}
	});
	$(".comments_placeholder_support").blur(function() {
		if ($(".comments_placeholder_support").val() == "") {
			$(".comments_placeholder_support").val($(".comments_placeholder_support").attr('placeholder'));
		}
	});
	$(".comments_placeholder_support").blur();
	$(".add_comment").submit(function() {
		if ($(".comments_placeholder_support").val() ==
			$(".comments_placeholder_support").attr('placeholder')) {
			return false;
	}
});
}
<!--END_comments_support placeholder in old browsers for comments-->

<!--search_support placeholder in old browsers for comments-->
if (!Modernizr.input.placeholder) {
	$(".search_placeholder_support").focus(function() {
		if ($(".search_placeholder_support").val()== $(".search_placeholder_support").attr('placeholder')) {
			$(".search_placeholder_support").val("");
		}
	});
	$(".search_placeholder_support").blur(function() {
		if ($(".search_placeholder_support").val() == "") {
			$(".search_placeholder_support").val($(".search_placeholder_support").attr('placeholder'));
		}
	});
	$(".search_placeholder_support").blur();
	$(".searchform").submit(function() {
		if ($(".search_placeholder_support").val() ==
			$(".search_placeholder_support").attr('placeholder')) {
			return false;
	}
});
}
<!--END_comments_search_support placeholder in old browsers for comments-->

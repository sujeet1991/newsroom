$(document).ready(function() {
	
	var dummy = 0;
// nav click section
$('.open-menu span').click(function(){
 		//alert('sujeet');
 	if(dummy == 0){
 		$(this).addClass('icon-roted');
 		$('.open-menu').parent().find('.open-menu').css({'background' :'#092a2c' ,'opacity':'0.73', 'color' :'#fff'});
 		dummy =1;
 	}else{
 		$(this).removeClass('icon-roted');
 		$('.open-menu').parent().find('.open-menu').css({'background' :'transparent' ,'opacity':'1', 'color' :'#fff'});
 		dummy=0;
 	}
		$('.nav-right').toggle('slide', {
            direction: 'left'
        }, 500);
        // $(this).removeClass('icon-roted');
});

// nav click section

// log in signup form
$('.mem-info').click(function(){
	$('.login-form').fadeOut(function(){$('.sign-up-form').fadeIn('slow');})
});

$('.sign-log').click(function(){
	$('.sign-up-form ').fadeOut(function(){$('.login-form').fadeIn('slow');})

});
//share slide
var share_dummy = 0;
$('.share-slide').click(function(){
	if (share_dummy==0) {
		$('.inner-share').animate({'right': '0%'},{queue: false });
		share_dummy=1;
	} 
	else{
		$('.inner-share').animate({'right': '-100%'},{queue: false });
		share_dummy=0;
	}
	// 
	
})

//slide category
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var slider = new Slider('#ex2', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var slider = new Slider('#ex3', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var slider = new Slider('#ex4', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
// var slider = new Slider('#ex4', {
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });
var slider = new Slider('#ex5', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var slider = new Slider('#ex6', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
var slider = new Slider('#ex7', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});



});
// end document section...
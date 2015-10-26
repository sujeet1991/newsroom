$(document).ready(function() {
	
	var dummy = 0;
// nav click section
$('.sub-menu li a').click(function(){
	$('.nav-right').toggle('slide', {
            direction: 'left'
        }, 500);
	$('.open-menu span').removeClass('icon-roted');
	$('.open-menu').parent().find('.open-menu').css({'background' :'transparent' ,'opacity':'1', 'color' :'#fff'});

});
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


// navigation btn click
$('.fstart-btn').click(function(){
	$('#home').hide();
	$('#user-log').hide();
	$('#history-nav').hide();
	$('#read-share').hide();
	$('#cate-read').hide();
	$('#setting-nav').show();
});
//cate
$('.cate-nav').click(function(){
	$('#home').hide();
	$('#user-log').hide();
	$('#history-nav').hide();
	$('#setting-nav').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#cate-nav1').show();
});
// home page
$('.opensign').click(function(){
	$('#home').hide();
	$('#cate-nav1').hide();
	$('#setting-nav').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#user-log').show();
})
$('.user-log').click(function(){
	$('#home').hide();
	$('#setting-nav').hide();
	$('#history-nav').hide();
	$('#cate-nav1').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#user-log').show();
});
$('.home').click(function(){
	$('#user-log').hide();
	$('#cate-nav1').hide();
	$('#setting-nav').hide();
	$('#history-nav').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#home').show();
});
// history
$('.history-nav').click(function(){
	$('#home').hide();
	$('#cate-nav1').hide();
	$('#user-log').hide();
	$('#setting-nav').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#history-nav').show();
});
// setting 
$('.setting-nav').click(function(){
	$('#home').hide();
	$('#cate-nav1').hide();
	$('#user-log').hide();
		$('#read-share').hide();
		$('#cate-read').hide();
	$('#setting-nav').show();

});
// after news paper
$('.toi-img').click(function(){
	$('#cate-nav1').hide();
	$('#chech-box').hide();
	$('#cate-read').show();
});
$('.read-view').click(function(){
	$('#cate-read').hide();
	$('#read-share').show();
});

// select category and news
$('.smart-news').click(function(){
	$('#cate-nav1').hide();
	$('#chech-box').show();
});


});
// end document section...
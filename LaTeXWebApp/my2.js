







$('body').on('click', '.next', function() { 
    var id = $('.content:visible').data('id');
    var nextId = $('.content:visible').data('id')+1;

 if(nextId == 80){ 
	return 0;
		
    }


    $('[data-id="'+id+'"]').hide();
    $('[data-id="'+nextId+'"]').show();
   
   
});

$('body').on('click', '.back', function() { 
    var id = $('.content:visible').data('id');
    var prevId = $('.content:visible').data('id')-1;

if(prevId == -1){ 
	return 0;
		
    }

    $('[data-id="'+id+'"]').hide();
    $('[data-id="'+prevId+'"]').show();
    
   
});

$('body').on('click', '.home', function() { 
var id = $('.content:visible').data('id');
$('[data-id="'+id+'"]').hide();

    $('#content-0').show();
});

 $(function() { 
$(".sectionToc").click(function(e){
var sText = e.target.href;
var element = sText.split("#");
var newDivId = '#'+element[1];
var parentDivId = $(newDivId).closest("div").attr("data-id");
$('#content-0').hide();
$('[data-id="'+parentDivId+'"]').show();
$('html, body').animate({scrollTop: '0px'}, 30);

});
});




 $(function() { 
$(".subsectionToc").click(function(e){
var sText = e.target.href;
var element = sText.split("#");

var newElement=element[1].split(".");


var newDivId = '#' + newElement[0] + '\\.' + newElement[1] ; 


var parentDivId = $(newDivId).closest("div").attr("data-id");


$('#content-0').hide();
$('[data-id="'+parentDivId+'"]').show();

$('html, body').animate({scrollTop: '0px'}, 30);
});
});



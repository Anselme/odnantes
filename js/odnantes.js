$('.before_after_container').beforeAfter({

    animateIntro: true,
    beforeLinkText: 1960,
    afterLinkText: 2008

});

$('#communes li a').click(function(){
    src = $(this).attr("href");
    $('.communes_details').find("> img").attr('src', src);
    $('.communes_details').fadeIn("slow");
    /*$('.communes_details').show("Size");*/
    return false;
});

$('span.balinks > a').addClass('btn success');
$('span.balinks + span.balinks > a ').addClass('test');
$('div.balinks').addClass('well');
$('span.balinks + span.balinks > a ').attr('style', 'float: right;');

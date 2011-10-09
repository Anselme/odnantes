$('.before_after_container').beforeAfter({

    beforeLinkText: 1960,
    afterLinkText: 2011

});

$('.details').click(function(){
    src = $(this).attr("href");
    $('.communes_details').find("> img").attr('src', src);
    $('.communes_details').show("slow");
    return false;
});


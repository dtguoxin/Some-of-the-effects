$(function(){
    //var targetHeight=$(".test").offset().top;

    $(window).scroll(function(){
        slideIn($(".target"),100);
    });

    function slideIn(obj,top){
        var targetHeight = obj.offset().top;
        var scrollTop = $(this).scrollTop();
        console.log(this)
        if(scrollTop>targetHeight-400){
            obj.animate({top:top+'px',opacity:1,filter:'Alpha(opacity=90)'},1000);
        }
    };
});
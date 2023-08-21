function btnScroll(){
    event.preventDefault(); 
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    // var windowHeight = window.innerHeight;
    // console.log(windowTop, windowHeight)

    if(windowTop > 0){
        $('html, body').animate({
            scrollTop: 0 
        },1200);
    }

}

function gnbSelect(obj){
    // $('.gnb > li > *:not(.lng)').removeClass('active')
    $(obj).parents('li').toggleClass('active').siblings().removeClass('active')
}
//====================
window.addEventListener('resize', function(){
    $('.gnb li').removeClass('active')
})
window.addEventListener('scroll', function(){
    var top = $(window).scrollTop(); 

    if(top > 200){
        $('aside').removeClass('inactive')
    }else{
        $('aside').addClass('inactive')
    }
})

//====================
$(function(){
    $('body').addClass('loaded')
    
    if($('header').length > 0){
        $('header .gnb').load('/includes/gnb.html')
    }
    if($('footer').length > 0){
        $('footer').load('/includes/footer.html')
    }
})


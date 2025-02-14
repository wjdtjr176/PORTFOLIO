








//about영역
gsap.from('.sc-intro .flex', {
    scrollTrigger: {
        trigger: '.sc-intro .list',
        start: '0% 50%',
        end: '100% 100%',
        scrub: 1,
        // markers:true,
    },
    yPercent: 200,
    opacity: 0,
    stagger: 0.3,
});



// 비디오영역축소
gsap.to(".video-area",{
    scale:0.97,
    ease: "power2.out",
    scrollTrigger:{
        trigger:".video-area",
        start:"0% 0%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    }
})


// 포폴 호버
$('.sc-recommend .list .item').hover(
    function () {
        $(this).find('.thumb').addClass('on'); 
    },
    function () {
        $(this).find('.thumb').removeClass('on'); 
    }
);



// 메인 영역 축소
gsap.to(".sc-recommend",{
    scale:0.97,
    ease: "power2.out",
    scrollTrigger:{
        trigger:".sc-recommend",
        start:"85% 0%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    }
})







// work영역
gsap.from(".sc-recommend .word .svg-container.w",{
    scrollTrigger:{
        trigger:".sc-recommend .animate-box",
        start:"0% 50%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    },
    x:-600
})
gsap.from(".sc-recommend .word .svg-container.o",{
    scrollTrigger:{
        trigger:".sc-recommend .animate-box",
        start:"0% 50%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    },
    x:-400
})

gsap.from(".sc-recommend .word .svg-container.r",{
    scrollTrigger:{
        trigger:".sc-recommend .animate-box",
        start:"0% 50%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    },
    x:400
})
gsap.from(".sc-recommend .word .svg-container.k",{
    scrollTrigger:{
        trigger:".sc-recommend .animate-box",
        start:"0% 50%",
        end:"100% 100%",
        scrub:3,
        // markers:true,
    },
    x:600
})




//무한 흐름
const infiniteSlide = new Swiper('.sc-recommend .group-infinite .swiper',{
    slidesPerView:'auto',
    spaceBetween:15,
    autoplay:{
        delay:0,
        disableOnInteraction:false,
       },
    loop:true,
    speed:7000,
    draggable: false,
    allowTouchMove: false,
    simulateTouch: false,
})



// 커서이벤트
$(window).mousemove(function(e){
    x = e.clientX;
    y = e.clientY;
 
    gsap.to('.cursor',{
    left: x,
    top: y,
    })
 })
$(".sc-recommend .list .item").mouseenter(function () {
    $(".cursor").addClass("active"); 
});

$(".sc-recommend .list .item").mouseleave(function () {
    $(".cursor").removeClass("active");
});

$("#footer .logo, .logo-m").mouseenter(function () {
    $(".cursor").addClass("logo");
});
$("#footer .logo, .logo-m").mouseleave(function () {
    $(".cursor").removeClass("logo");
    $(".cursor").removeClass("copied");
});


// 푸터 로고 복사
$("#footer .logo, .logo-m").click(function(){
    let textToCopy = "wjdtjr176@naver.com"

    navigator.clipboard.writeText(textToCopy)

    $(".cursor").addClass("copied");
})



 









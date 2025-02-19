


// 로딩
const visual = gsap.timeline({
    
})
visual.from(".logo-area span",{
    yPercent:"200",
    opacity:0,
    stagger:0.1,
    ease: "power2.out",
})
visual.from(".nav-area",{
    yPercent:"100",
    opacity:0
})
visual.from(".video-area",1,{
    yPercent:"300",
    opacity:0,
    ease: "power2.out",
})





//상단으로
$('#footer .item:nth-child(3) .left-area a').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"})
})


//하단으로
$('.nav-list .nav-item .gocontact').click(function(e){
    e.preventDefault();
    window.scrollTo({top: document.body.scrollHeight,behavior:"smooth"})
})





//상단에서 이동
$('.nav-list .nav-item a').click(function(e){
    e.preventDefault();
    
    target = $(this).data('target');
    targetOffset = $(target).offset().top;

    window.scrollTo({top:targetOffset,behavior:"smooth"})
    
})
areaArr = ['#about','#project','#footer'];

//하단에서 이동
$('#footer .top .right-wrap a').click(function(e){
    e.preventDefault();
    
    target = $(this).data('target');
    targetOffset = $(target).offset().top;

    window.scrollTo({top:targetOffset,behavior:"smooth"})
    
})
areaArr = ['#about','#project'];
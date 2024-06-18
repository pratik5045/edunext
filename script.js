var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var p=gsap.timeline();

  p.from('.eduu img',{
    duration:1.3,
    scale:0,
    opacity:0,
    stagger:.2
})

p.from('.tc1',{
    y: 100,
    opacity:0,
})
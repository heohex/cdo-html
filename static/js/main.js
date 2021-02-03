AOS.init({
  duration: 1400,
  easing: 'ease',
  once: true,
});
window.addEventListener('load', AOS.refresh)

const $currentSlide = $(".slider-counter-current"),
      $allSlides = $(".slider-counter-all"),
      $slider = $(".slider-container"),
      $caseSlider = $(".case-slider")

$(document).ready(function () {
  $slider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    nextArrow: $('.arrow-next'),
    prevArrow: $('.arrow-prev')
  });
  $caseSlider.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    centerMode: false,
    enterPadding: 0,
    variableWidth: true,
    nextArrow: $('.case-slider_next'),
    prevArrow: $('.case-slider_prev'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },

    ]
  });

});

$slider.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide
) {
  const i = (currentSlide ? currentSlide : 0) + 1;
  $currentSlide.text(i);
  $allSlides.text(`${slick.slideCount}`);
});


ymaps.ready(function () {
  const map = new ymaps.Map('map', {
    center: [55.752050, 37.5956],
    zoom: 17,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });
  const circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout"></div></div>');
  const moscow = new ymaps.Placemark(
    [55.752050, 37.5956], {}, {
      iconLayout: circleLayout,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 25
      }
    }
  );

  const ryazan = new ymaps.Placemark(
    [54.626760, 39.742202], {}, {
      iconLayout: circleLayout,
      iconShape: {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 25
      }
    }
  );
  map.geoObjects.add(moscow).add(ryazan);

  $('#moscow').on('click',function () {
    map.setCenter([55.752050, 37.5956]);
    $('#ryazan').removeClass('arrow-wrapper--active');
    $(this).addClass('arrow-wrapper--active');
  });

  $('#ryazan').on('click',function () {
    $('#moscow').removeClass('arrow-wrapper--active');
    $(this).addClass('arrow-wrapper--active');
    map.setCenter([54.626760, 39.742202]);
  });
});


$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    e.preventDefault();
    const fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  });
});

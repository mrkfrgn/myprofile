
$('#carousel-section').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplayspeed: 3000,
  arrows: false,
});

$(function () {
  $('.opacity').on('mouseover', function() {
    $(this). animate({
      opacity: 0.5,
    },100);
  });

  $('.opacity').on('mouseout', function() {
    $(this). animate({
      opacity: 1.0,
    }, 100);
  });
});

  $(window).scroll(function () {
    if($(window).scrollTop() > 1) {
      $('#back-btn').fadeIn(300).css('display', 'flex')
    } else if($(window).scrollTop () == 0) {
      $('#back-btn').fadeOut(300);
    }
  });

  $(function () {
   $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href ==="" ? 'html' :href);
    const position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
   });
  });

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('.fade-out').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  $('.works-contents img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal-window').fadeIn();
    return false
    });

    $('.close').click(function () {
      $('.modal-window').fadeOut();
      return false
    });
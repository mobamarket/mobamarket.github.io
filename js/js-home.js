

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  

  $(".toggleNav").on('click', function() {
    $('nav').show('slow')
  })

  $('.mobile-menu-control').on('click', function() {
    $('nav').hide('slow')
  })

  $('li.has-dropdown span.dropdown').on('click', function(e) {
    let subMenu =  $(e.target).parent()
    subMenu.slideDown('slow')
    console.log(subMenu)
  })
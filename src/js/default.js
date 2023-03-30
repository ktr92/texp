function initFE() {
  closeByClickOutside('.headersearch', '[data-toggleclick="headersearch"]')
}



function closeByClickOutside(element, button, callback) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass('active')
      $(element).removeClass('active')
    }
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      $(button).removeClass('active')
      $(element).removeClass('active')
    }
  });

  if (callback instanceof Function) { callback(); }
}

$(document).ready(function () {
  $("[data-sliderprev]").each(function () {
    $(this).click(function () {
      let sl = $(this).attr('data-sliderprev')
      $(`[data-sliderwrapper="${sl}"] .slick-slider`).slick("slickPrev");
    });
  })

  $("[data-slidernext]").each(function () {
    $(this).click(function () {
      let sl = $(this).attr('data-slidernext')
      $(`[data-sliderwrapper="${sl}"] .slick-slider`).slick("slickNext");
    })
  });


  $('[data-toggleclick]').on('click', function (e) {
    $(this).toggleClass('active')
    e.preventDefault()
    let dropdown = $(this).data('toggleclick')
    $('[data-toggle].active').not($(`[data-toggle=${dropdown}]`)).removeClass('active')
    $('[data-toggleclick].active').not($(`[data-toggleclick=${dropdown}]`)).removeClass('active')
    $(`[data-toggle=${dropdown}]`).toggleClass('active')
    $(`[data-toggleactive=${dropdown}]`).toggleClass('active')
  })

  $('[data-toggleclickset]').on('click', function (e) {
    $(this).toggleClass('active')
    e.preventDefault()
    let dropdown = $(this).data('toggleclickset')
    let wrapper = $(this).closest(`[data-toggleitem]`)
    $('[data-toggleitem].active').not(wrapper).removeClass('active')
    $('[data-toggle].active').not(wrapper.find(`[data-toggle=${dropdown}]`)).removeClass('active')
    $('[data-toggleclickset].active').not(wrapper.find(`[data-toggleclickset=${dropdown}]`)).removeClass('active')
    wrapper.addClass('active')
    wrapper.find(`[data-toggle=${dropdown}]`).toggleClass('active')
    $(`[data-toggleactive=${dropdown}]`).toggleClass('active')
  })


  $('[data-menutoggle]').on('click', function (e) {
    e.preventDefault()
    let menu = $(this).data('menutoggle')
    $(`[data-menu=${menu}]`).toggleClass('active')
    $(this).toggleClass('active')
    $('.jsbackdrop').toggleClass('active')
    $('body').toggleClass('block')

  })
  $('.jsbackdrop').on('click', function (e) {
    $(this).removeClass('active')
    $('[data-menu]').removeClass('active')
    $('[data-menutoggle]').removeClass('active')
    $('body').removeClass('block')

  })
})

window.addEventListener('load', function () {
  initFE()
});
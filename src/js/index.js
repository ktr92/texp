
$(document).ready(function() { 
  $("input[type=tel]").mask("7 (999) 999-99-99");

  $(function() {
	
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});

$("a.scrollTo").click(function (e) {
	e.preventDefault()
	var destination = $($(this).attr("href")).offset().top - 10;
	$("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 600);
	$('.mainmenu').removeClass('active')
	$('.menubtn').removeClass('active')
	return false;
});


window.addEventListener('scroll', (event) => {
	scroll = window.scrollY
	if (scroll >= 1200) {
		document.getElementById("gototop").classList.add('active')
	} else {
		document.getElementById("gototop").classList.remove('active')
	}

});

$('button.menubtn').on('click', function(e) {
	e.preventDefault()
	$(this).toggleClass('active')
	$('.mainmenu').toggleClass('active')
})

function closeByClickOutside(element, button) {
  $(document).click(function(event) {
      if (!$(event.target).closest(`${element},${button}`).length) {
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
  
  $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
}

closeByClickOutside('.mainmenu', '.menubtn')

var wow = new WOW();
wow.init();

$(function() {
  return $(".modal").on("show.bs.modal", function() {
    var curModal;
    curModal = this;
    $(".modal").each(function() {
      if (this !== curModal) {
        $(this).modal("hide");
      }
    });
  });
});

})


$(document).ready(function (){

	YaMapsShown = false; 

	function showYaMaps(){
		var script   = document.createElement("script");
		script.type  = "text/javascript";
		script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A29effecca8741f8c7ba884726c458ad6344e6e30dc1bc81265e789bd75832c6e&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true";
		document.getElementById("YaMaps").appendChild(script);
	 }

	 
	$(window).scroll(function() {
		 if (!YaMapsShown){
			if($(window).scrollTop() + $(window).height() > $(document).height() - 700) {      
			 showYaMaps();
			 YaMapsShown = true;
			}
		 }
	});
	
 });
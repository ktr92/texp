/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};(()=>{function e(){$(".sliderworks__slider").on("init",(function(e,s,l,i){console.log("init"),$(s.$slides.get(0)).addClass("currentslide"),$(s.$slides.get(1)).addClass("nextslide"),$(s.$slides.get(2)).addClass("nextnextslide")})),$(".sliderworks__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,variableWidth:!0}),$(".sliderworks__slider").on("beforeChange",(function(e,s,l,i){let d;d=0===l&&i===s.$slides.length-1?"prev":i>l||l===s.$slides.length-1&&0===i?"next":"prev";let t=1,n=2,o=3;"next"===d?(t=$(s.$slides.get(i)),n=$(s.$slides.get(i)).next(),o=n.next()):(t=$(s.$slides.get(i)),n=t.next(),o=n.next()),$(s.$slides.removeClass("currentslide")),$(s.$slides.removeClass("nextslide")),$(s.$slides.removeClass("nextnextslide")),t.addClass("currentslide"),n.addClass("nextslide"),o.addClass("nextnextslide")})),$(".reviewsblock__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:5,slidesToScroll:1}),$(".parntersblock__slider").slick({dots:!1,infinite:!0,arrows:!1,slidesToShow:6,slidesToScroll:1})}window.addEventListener("load",(function(){e()}))})(),(()=>{"use strict";e.r(s)})()})();
//# sourceMappingURL=bundle.js.map
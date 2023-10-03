let animate_carousel = true;
let duration = 10;

function isVisible(el) {
  while (el) {
    if (el === document) {
      return true;
    }
    var $style = window.getComputedStyle(el, null);
    if (!el) {
      return false;
    } else if (!$style) {
      return false;
    } else if ($style.display === 'none') {
      return false;
    } else {
      return isVisible(el.parentNode);
    }
  }
}

if (animate_carousel) {
  setInterval(function(){
    var j = 0;
    var elements = document.querySelectorAll('#carousel .carousel__control--forward');
    for(i=(elements.length - 1);i>-1;i--) {
      if(isVisible(elements[i])) j=i;
    }
    elements[j].click();
  },duration*1000);
}
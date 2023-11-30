
let offset = 0;
let offset2 = 0
let slider = document.querySelector(".slider-line");
let sliderText = document . querySelector (".slider-text")
document.querySelector(".imgleft").addEventListener('click', function(){
    offset = offset + 225;
    offset2 += 250
    if(offset > 610){
        offset =0;
    }
    sliderText.style.top = -offset2 + "px"
    slider.style.left = -offset + "px";
}); 


document.querySelector(".imgright").addEventListener("click", function () {
  offset = offset - 225;
  if (offset < 0) {
    offset = 450;
  }
  slider.style.left = -offset + "px";
}); 
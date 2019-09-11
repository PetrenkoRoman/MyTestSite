
function myFunction() {
    let nav = document.getElementById("nav");
    if (nav.style.display === "grid") {
        nav.style.display = "none";
    } else {
        nav.style.display = "grid";
    }


}


let slider = document.getElementsByClassName('slider-item'),
    prevBtn =document.getElementById('left-button'),
    nextBtn =document.getElementById('right-button'),
    slideIndex = 1;

showSlider(slideIndex);
function showSlider(n) {
    if (n<1){
        slideIndex = slider.length;

    }
else if (n>slider.length){
        slideIndex = 1;
    }
    for (let i =0; i < slider.length; i++){
        slider[i].style.display = 'none';
    }
    slider[slideIndex - 1].style.display = 'block';
}

function plusSlider(n) {
    showSlider(slideIndex += n);
}
prevBtn.onclick = function () {
    plusSlider(-1);

};
nextBtn.onclick = function () {
    plusSlider(1);

};
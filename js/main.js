var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

let time = 2000,
  currentImageIndex = 0,
  images = document
              .querySelectorAll(".swiper-slide img")
  max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++
    
    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")

}

function start() {
    setInterval(() => {
      /* Troca de imagem */ 
        nextImage()
      }, time)

}

window.addEventListener("load",start)
class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.images = this.carousel.querySelectorAll('img');


    this.leftButton.addEventListener('click', () => this.leftButtonPress());
    this.rightButton.addEventListener('click', () => this.rightButtonPress());
  }
  rightButtonPress() {
    const images = this.images;
    const length = images.length;

    for (let i=0; i<length; i++) {

      if (images[length-1].classList.contains('active-img') && images[0].classList.contains('active-img')) {
        images[length-1].classList.remove('active-img');
        images[1].classList.add('active-img');
        images[0].style.order = 0;
        break;
      }

      if (images[length-1].classList.contains('active-img') && images[length-2].classList.contains('active-img')) {
        images[length-2].classList.remove('active-img');
        images[0].classList.add('active-img');
        images[length-1].style.order = -1;
        break;
      }

      if (images[1].classList.contains('active-img')) {
        images[length-1].style.order = 0;
      }

      if (images[i].classList.contains('active-img')) {
        images[i].classList.remove('active-img');
        images[i+2].classList.add('active-img');
        break;
      }
    }
    images.forEach( img => img.classList.contains('active-img') ? TweenMax.from(img, .8, {x: img.width, ease:Power3.easeOut}) : img.style.x !==0 ? TweenMax.to(img, .01, {x:0}) : null );
  }
  leftButtonPress() {
    const images = this.images;
    const length = images.length;

    for (let i=length-1; i>=0; i--) {

      if (images[0].classList.contains('active-img') && images[1].classList.contains('active-img')) {
        images[1].classList.remove('active-img');
        images[0].style.order = 1;
        images[length-1].classList.add('active-img');
        break;
      }

      if (images[1].classList.contains('active-img') && images[2].classList.contains('active-img')) {
        images[0].style.order = 0;
      }

      if (images[length-1].classList.contains('active-img') && images[0].classList.contains('active-img')) {
        images[0].classList.remove('active-img');
        images[length-1].style.order = 0;
        images[length-2].classList.add('active-img');
        break;
      }

      if (images[i].classList.contains('active-img')) {
        images[i].classList.remove('active-img');
        images[i-2].classList.add('active-img');
        break;
      }
    }
    images.forEach( img => img.classList.contains('active-img') ? TweenMax.from(img, .8, {x: -img.width, ease:Power3.easeOut}) : img.style.x !== 0 ? TweenMax.to(img, .01, {x:0}) : null );
  }
}

const carouselSelect = document.querySelector('.carousel');
const carousel = new Carousel(carouselSelect);

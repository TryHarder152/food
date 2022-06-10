export default class Carousel {
  constructor({navBtnPrev = null, navBtnNext = null, counterParent = null, content = null}) {
    this.navBtnPrev = document.querySelector(navBtnPrev);
    this.navBtnNext = document.querySelector(navBtnNext);
    this.content = document.querySelectorAll(content);
    this.contentParent = this.content[0].parentElement;

    this.counterParent = document.querySelector(counterParent);
    this.counterCurrent = this.counterParent.querySelector('#current');
    this.counterTotal = this.counterParent.querySelector('#total');
  }

  addZero = (number) => number < 10 ? `0${number}` : number;

  renderCounter() {
    let count = 1;
    this.counterTotal.innerHTML = this.addZero(this.content.length);
    this.counterCurrent.innerHTML = this.addZero(count);

    this.content.forEach((slide) => {
      slide.style.display = 'none';
    });

    this.content[count - 1].style.display = 'flex';

    this.navBtnNext.addEventListener('click', () => {
      count++;
      if(count > this.content.length) {
        count = 1;
      }

      this.content.forEach((slide) => {
        slide.style.display = 'none';
      });

      this.counterCurrent.innerHTML = this.addZero(count);
      this.content[count - 1].style.display = 'flex';
    });

    this.navBtnPrev.addEventListener('click', () => {
      count--;
      if(count <= 0) {
        count = this.content.length;
      }

      this.content.forEach((slide) => {
        slide.style.display = 'none';
      });

      this.content[count - 1].style.display = 'flex';
      this.counterCurrent.innerHTML = this.addZero(count);
    });
  }

  init() {
    this.renderCounter();
  }
}
export default class CalculateCalories {
  constructor({calculator = '.calculating', resultElement = '.calculating__result', classActive = '.calculating__choose-item_active'}) {
    this.resultElement = document.querySelector(resultElement);
    this.calculator = calculator;
    this.classActive = classActive;

    this.sex = 'female';
    this.height;
    this.weight;
    this.age;
    this.ratioActivity = 1.375;
  }

  calcTotal() {
    if(!this.sex || !this.height || !this.weight || !this.age || !this.ratioActivity) {
      this.resultElement.textContent = '0';
      return;
    }

    if(this.sex === 'female') {
      this.resultElement.textContent = ((447.6 + (9.2 * this.weight) + (3.1 * this.height) - (4.3 * this.age)) * this.ratioActivity).toFixed();
    } else if (this.sex === 'male') {
      this.resultElement.textContent = ((88.36 + (13.4 * this.weight) + (4.8 * this.height) - (5.7 * this.age)) * this.ratioActivity).toFixed();
    }
  }

  getStaticInformation(parentSelector, activeClass) {
    let elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(element => {
      element.addEventListener('click', (event) => {

        if(event.target.dataset.ratio) {
          this.ratioActivity = +event.target.dataset.ratio;
        } else {
          this.sex = event.target.getAttribute('id');
        }
  
        elements.forEach(element => {
          element.classList.remove(activeClass);
        });
  
        event.target.classList.add(activeClass);
        this.calcTotal();
      });
    });
  }

  getDynamicInformation(inputSelector) {
    let input = document.querySelector(inputSelector);

    input.addEventListener('input', () => {
      switch(input.getAttribute('id')) {
        case 'height': 
          this.height = +input.value;
          break;
        case 'weight':
          this.weight = +input.value;
          break;
        case 'age':
          this.age = +input.value;
          break;
      }

      this.calcTotal();
    });
  }

  init() {
    this.getStaticInformation('#gender', this.classActive);
    this.getStaticInformation('.calculating__choose_big', this.classActive);
    this.getDynamicInformation('#height');
    this.getDynamicInformation('#weight');
    this.getDynamicInformation('#age');
  }
}
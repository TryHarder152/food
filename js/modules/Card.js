export default class Card {
  constructor({img = null, altSrc = null, title = null, description = null, price = null, parentElement = null}) {
    this.img = img;
    this.altSrc = altSrc;
    this.title = title;
    this.description = description;
    this.price = price;
    this.parentElement = document.querySelector(parentElement);
  }

  render() {
    let card = document.createElement('div');
    card.classList.add('menu__item');
    card.innerHTML = `
      <img src="${this.img}" alt="${this.altSrc}">
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.description}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
      </div>
    `;

    this.parentElement.append(card);
  }
}


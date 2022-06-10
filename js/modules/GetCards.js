import Card from './Card.js';

export default class GetCards {
  constructor(urlToServer) {
    this.urlToServer = urlToServer;
  }

  getCardResources = async (url) => {
    let result = await fetch(url);

    if(!result.ok) {
      throw new Error(`Cound not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
  };

  renderCardMenu() {
    this.getCardResources(this.urlToServer)
    .then(data => {

      data.forEach((object) => {
        new Card({
          img: object.img,
          altSrc: object.altimg,
          title: object.title,
          description: object.descr,
          price: object.price,
          parentElement: '.menu .container'
        }).render();
      });
    });
  }


  init() {
    this.renderCardMenu();
  }
}
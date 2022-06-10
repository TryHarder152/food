'use strict';

import Modal from './modules/Modal.js';
import Tab from './modules/Tabs.js';
import FormPost from './modules/FormPost.js';
import GetCards from './modules/GetCards.js';
import Carousel from './modules/Carousel.js';
import CalculateCalories from './modules/CalculateCalories.js';

let MainModal = new Modal({/*modal: '.modal', modalBtnOpen: '.modal__open', modalBtnClose: '.modal__close'*/});
MainModal.init();

let MainTab = new Tab({/*tab: '.tabcontainer', tabBtns: '.tabheader__item', tabContent: '.tabcontent', defaultTabActive: 0*/});
MainTab.init();

let PostForm1 = new FormPost('.order form', 'http://localhost:3000/requests');
PostForm1.init();

let PostForm2 = new FormPost('.modal form', 'http://localhost:3000/requests');
PostForm2.init();

let GetCardsFromServer = new GetCards('http://localhost:3000/menu');
GetCardsFromServer.init();

let MainCarousel = new Carousel({
  navBtnPrev: '.offer__slider-prev',
  navBtnNext: '.offer__slider-next',
  counterParent: '.offer__slider-counter',
  content: '.offer__slide'
});
MainCarousel.init();

let Calculator = new CalculateCalories({
  calculator: '.calculating',
  resultElement: '.calculating__result span',
  classActive: 'calculating__choose-item_active'
});
Calculator.init();
export default class Tab {
  constructor(
    {
      tab = '.tabcontainer', 
      tabBtns = '.tabheader__item', 
      tabContent = '.tabcontent', 
      defaultTabActive = 0
    }) {
    this.tab = document.querySelector(tab);
    this.tabBtns = this.tab.querySelectorAll(tabBtns);
    this.tabContents = this.tab.querySelectorAll(tabContent);
    this.defaultTabActive = +defaultTabActive;
  }

  showTabContent() {
    this.tabBtns[this.defaultTabActive].classList.add('tabheader__item_active');
    this.tabContents[this.defaultTabActive].classList.add('show');

    this.tabBtns.forEach((tabShowBtn, tabshowContentIndex) => {
      tabShowBtn.addEventListener('click', () => {
        this.hideTabContent();

        tabShowBtn.classList.add('tabheader__item_active');
        this.tabContents[tabshowContentIndex].classList.add('show');
      });
    });
  }

  hideTabContent() {
    this.tabContents.forEach(tabContent => {
      tabContent.classList.remove('show');
    });

    this.tabBtns.forEach(tabshowBtn => {
      tabshowBtn.classList.remove('tabheader__item_active');
    });
  }

  init() {
    this.showTabContent();
  }
}
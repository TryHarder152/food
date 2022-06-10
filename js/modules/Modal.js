export default class ToggleModal {
  constructor(
    {
      modal = '.modal', 
      modalBtnOpen = '.modal__open', 
      modalBtnClose = '.modal__close'
    }) {
    this.modal = document.querySelector(modal);
    this.modalBtnOpen = document.querySelectorAll(modalBtnOpen);
    this.modalBtnClose = this.modal.querySelector(modalBtnClose);
  }

  close() {
    this.modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  openModal() {
    this.modalBtnOpen.forEach(modalOpen => {
      modalOpen.addEventListener('click', () => {
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  closeModal() {
    this.modalBtnClose.addEventListener('click', () => {
      this.close();
    });

    window.addEventListener('keyup', (event) => {
      if(event.code == 'Escape') {
        this.close();
      }
    });

    this.modal.addEventListener('click', (event) => {
      if(event.target == this.modal) {
        this.close();
      }
    });
  }

  init() {
    this.openModal();
    this.closeModal();
  }
}
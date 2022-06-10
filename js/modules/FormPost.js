export default class FormPost {
  request = {};

  constructor(form, urlToServer) {
    this.form = document.querySelector(form);
    this.urlToServer = urlToServer;
  }

  postData = async (url, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await result.json();
  };

  bindPostFormData() {
    let statusMessage = {
      sucsess: 'Мы с вами свяжемся!',
      failure: 'Что-то пошло не так...',
      loading: 'Загрузка...'
    };
    
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      let statusInfo = document.createElement('div');
      statusInfo.innerHTML = statusMessage.loading;
      this.form.append(statusInfo);

      let formData = new FormData(this.form);

      let formDataObject = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(formDataObject);

      // formData.forEach((value, key) => {
      //   formDataObject[key] = value;
      // });
      
      this.postData(this.urlToServer, formDataObject)
      .then(result => {
        console.log(result);
        statusInfo.innerHTML = statusMessage.sucsess;
        setTimeout(() => {
          statusInfo.remove();
        }, 5000);
      })
      .catch(error => {
        console.log(error);
        statusInfo.innerHTML = statusMessage.failure;
        setTimeout(() => {
          statusInfo.remove();
        }, 10000);
      })
      .finally(() => {
        this.form.reset();
      });
    });
  }

  init() {
    this.bindPostFormData();
    
  }
}
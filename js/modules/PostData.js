export default class PostData {
  constructor() {
    
  }





  async postData() {
    let result = await fetch(this.urlToServer, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  }

  init() {
    console.log(this.form, this.urlToServer);
  }
}
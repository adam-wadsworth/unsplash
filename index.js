const unsplashAxios = require('./unsplashAxios');

class Unsplash {

  constructor() {
    this.unsplash = null;
  }

  getPhoto(id){
    this.unsplash = unsplashAxios( `/photos/${id}`);
    this.unsplash.then((response) => {
      console.log(response)
    }).catch((response) => {
      console.log(response);
    });
  }

  getCollection(id){
    this.unsplash = unsplashAxios(`/collections/${id}/photos`);
    this.unsplash.then((response) => {
      console.log(response)
    }).catch((response) => {
      console.log(response);
    });
  }

}

myUnsplash = new Unsplash();
myUnsplash.getPhoto('PgHc0Ka1E0A');
myUnsplash.getCollection('62890');
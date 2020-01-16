const unsplashAxios = require('./unsplashAxios');

class Unsplash {
  constructor(path) {
    return unsplashAxios(path)
  }
}

class GetPhoto {
  constructor() {
    const unsplash = new Unsplash('/photos/PgHc0Ka1E0A');
    unsplash.then((response) => {
      console.log(response)
    }).catch((response) => {
      console.log(response);
    });
  }
}

class GetCollection {
  constructor() {
    const unsplash = new Unsplash('/collections/62890/photos');
    unsplash.then((response) => {
      console.log(response)
    }).catch((response) => {
      console.log(response);
    });
  }
}

const getPhoto = new GetPhoto();
const getCollection = new GetCollection();

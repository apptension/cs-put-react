import fetch from 'isomorphic-fetch';
import md5 from 'md5';
import url from 'url';

class ApiService {
  constructor() {
    this.marverlApiUrl = 'http://gateway.marvel.com:80/v1/public/';
    this.marvelApiKey = 'f6cea6ba549662b8ae53f72cb59835d9';
    this.marvelApiPrivateKey = '98f6eaf7cdf45f76b8f33251e4b57195c937a68e';
  }

  buildUrl(resource) {
    const timestamp = new Date().getTime();
    const parsedURL = url.parse(this.marverlApiUrl + resource, true);
    return url.format(Object.assign({}, parsedURL, {
      query: Object.assign({}, parsedURL.query, {
        apikey: this.marvelApiKey,
        ts: timestamp,
        hash: md5(timestamp + this.marvelApiPrivateKey + this.marvelApiKey)
      }),
      search: null
    }));
  }

  getCharacterList() {
    const characterListUrl = this.buildUrl('characters?limit=100');

  }
}

export default new ApiService();

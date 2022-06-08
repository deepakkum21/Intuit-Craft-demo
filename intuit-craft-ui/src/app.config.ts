export let API_URL = 'http://localhost:9201';
export let appConstants: any = {};

const getApiUrl = (): string => {
  // can be done using switch
  if (-1 !== window.location.hostname.indexOf('localhost')) {
    return API_URL;
  }

  // can add for prod , UAT

  // returning default localhost
  return API_URL;
};

appConstants = {
  API_ENDPOINT: getApiUrl(),
};

import { appConstants } from 'src/app.config';

const BASE_URL = '/craft/v1';

export const SERVICE_ENDPOINT = {
  LOGIN_SUCCESS: appConstants.API_ENDPOINT + BASE_URL + '/success',
  LOGIN_FAIL: appConstants.API_ENDPOINT + BASE_URL + '/fail',
};

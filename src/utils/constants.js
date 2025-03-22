export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const MENU_API_TARGET = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.900965&lng=75.8572758&restaurantId=";
const RES_API_TARGET = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758';

const ApiKey = '330e0f7b7253db57';
const EDUCORS_URL = 'https://educorssolver.host/api/getData';
export const RES_API = `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(RES_API_TARGET)}`;
export const MENU_API = `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(MENU_API_TARGET)}`;
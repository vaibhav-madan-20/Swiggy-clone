export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.900965&lng=75.8572758&restaurantId=";

const ApiKey = '330e0f7b7253db57';
const EDUCORS_URL = 'https://educorssolver.host/api/getData';
const Target = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758';
export const RES_API = `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(Target)}`;
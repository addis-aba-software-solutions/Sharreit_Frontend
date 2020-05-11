const API_BASE_URL = "https://us-central1-share-it-5c4ec.cloudfunctions.net/api"

export const routes = {
    login: API_BASE_URL + "/login",
    signup: API_BASE_URL + "/signup",
    fetchAllItems: API_BASE_URL + "/items",
    fetchSingleItem: API_BASE_URL + "/item",
    addItem: API_BASE_URL + "/posts",
    getUser: API_BASE_URL + "/getuser",
    getItemsBySubCategory: API_BASE_URL + "/item-by-category"
}
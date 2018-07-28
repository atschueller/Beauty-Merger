import axios from "axios";

export default {
  
  getAllProducts: function() {
    return axios.get("/api/productapi");
  },
  getProductByName: function(name) {
    return axios.get("/api/productapi/" + name);
  },
  saveProductReview: function(review) {
    return axios.put("/api/productapi/", review);
  },
  saveNewProfile: function(profileData) {
    return axios.post("/api/userapi", profileData);
  },
  getUserbyName: function(userData) {
    return axios.get("/api/userapi/" + userData);
  },
};

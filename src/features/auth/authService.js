import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
console.log(userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    
  }
  return response.data;
};


//profile user
const profile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "profile", profileData, config);

   return response.data.body;

};

//update profile user
const profileUpdate = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "profile", profileData, config);

   return response.data.body;

};


// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login, 
  profile,
  profileUpdate,
  logout,
};

export default authService;

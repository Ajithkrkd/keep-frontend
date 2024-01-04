

import axios from "axios";
import toast from "react-hot-toast";

export async function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  console.log('Refresh Token:', refreshToken);
  const refreshTokenUrl = 'http://localhost:9000/api/auth/refresh-token';

  const headers = {
    'Authorization': `Bearer ${refreshToken}`,
  };
  try {
    const response = await axios.post(
        refreshTokenUrl, {}, { headers }
    )
    
    console.log('Refresh Token Response:', response.data);
  
    const { access_token, refresh_token } = response.data;
    console.log("access -----------", access_token);
    console.log("refresh -----------", refresh_token);
  
    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("refreshToken", refresh_token);
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Error refreshing access token');
  }
  
}

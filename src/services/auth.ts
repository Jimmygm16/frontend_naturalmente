import API from "@/API"

type TokenValidation = {
  valid: boolean
}

const validateToken = async (): Promise<TokenValidation> => {
  try {
    const response = await API.post('/auth/check-token-validity');
    return response.data as TokenValidation;
  } catch (error) {
    throw error;
  }
}

export const checkTokenValidity = () => {

  async function checkToken() {
    try {
      const response = await validateToken();
      return response;
    } catch (error) {
      throw error
    }
  }

  checkToken().then((response) => {
    if(!response.valid) {
      localStorage.removeItem("authUser")
    }
  })
}

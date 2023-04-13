// 로그인
export const login = async (body: LoginRequest): Promise<any> => {
  try {
    const response = await axios.post('/auth/login', body, {
      withCredentials: true,
      headers: {
        'Content-type': 'application/json',
      },
    });
    const { payload } = response.data;
    const token = payload.accessToken;
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
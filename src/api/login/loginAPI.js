import axios from 'axios';

const LoginAPI = {
  handleOnSubmitLoginForm: (githubId, password) => {
    return axios.post('https://www.iflab.run/api2/login', {
      githubId: githubId,
      password: password,
    });
  },
};

export default LoginAPI;

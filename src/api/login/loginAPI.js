import axios from 'axios';
import { API_BASE_URL } from '../../views/Home';
const LoginAPI = {
  handleOnSubmitLoginForm: (githubId, password) => {
    return axios.post(`${API_BASE_URL}/login`, {
      githubId: githubId,
      password: password,
    });
  },
  handleOnSubmitSignupForm: ({
    name,
    password,
    githubId,
    baekjoonId,
    studentId,
    discordId,
    notionEmail,
  }) => {
    return axios.post(`${API_BASE_URL}/sign-up`, {
      username: name,
      password: password,
      githubId: githubId,
      baekjoonId: baekjoonId,
      studentId: studentId,
      discordId: discordId,
      notionEmail: notionEmail,
    });
  },
};

export default LoginAPI;

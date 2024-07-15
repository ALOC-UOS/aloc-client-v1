import axios from 'axios';

const LoginAPI = {
  handleOnSubmitLoginForm: (githubId, password) => {
    return axios.post('https://www.iflab.run/api2/login', {
      githubId: githubId,
      password: password,
    });
  },
  handleOnsubmitSignupForm: (
    name,
    password,
    githubId,
    baekjoonId,
    studentId,
    discordId,
    notionEmail
  ) => {
    return axios.post('https://www.iflab.run/api2/sign-up', {
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

import axios from 'axios';
const LoginAPI = {
  handleOnSubmitLoginForm: (githubId, password) => {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      githubId: githubId,
      password: password,
    });
  },
  handleOnSubmitSignUpForm: ({
    name,
    password,
    githubId,
    baekjoonId,
    studentId,
    discordId,
    notionEmail,
    course,
  }) => {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, {
      username: name,
      password: password,
      githubId: githubId,
      baekjoonId: baekjoonId,
      studentId: studentId,
      discordId: discordId,
      notionEmail: notionEmail,
      course: course,
    });
  },
};

export default LoginAPI;

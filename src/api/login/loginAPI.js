import axios from 'axios';
const LoginAPI = {
  handleOnSubmitLoginForm: (githubId, password) => {
    return axios.post('/login', {
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
    return axios.post('/sign-up', {
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

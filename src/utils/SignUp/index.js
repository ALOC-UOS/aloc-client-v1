import { SIGNUP_PLACEHOLDER } from '../../constants/SignUp';
export const textReducer = (state, action) => {
  switch (action.type) {
    //set text state
    case 'GITHUB_ID':
      return { ...state, githubId: action.text };
    case 'PASSWORD':
      return { ...state, password: action.text };
    case 'CHECKED_PASSWORD':
      return { ...state, checkedPassword: action.text };
    case 'NAME':
      return { ...state, name: action.text };
    case 'STUDENT_ID':
      return { ...state, studentId: action.text };
    case 'BAEKJOON_ID':
      return { ...state, baekjoonId: action.text };
    case 'DISCORD_ID':
      return { ...state, discordId: action.text };
    case 'NOTION_EMAIL':
      return { ...state, notionEmail: action.text };
    default:
      throw new Error('unknown action type');
  }
};

export const focusReducer = (state, action) => {
  switch (action.type) {
    //focus state
    case 'GITHUB_ID':
      return { ...state, githubIdFocus: !state.githubIdFocus };
    case 'PASSWORD':
      return { ...state, passwordFocus: !state.passwordFocus };
    case 'CHECKED_PASSWORD':
      return { ...state, checkedPasswordFocus: !state.checkedPasswordFocus };
    case 'NAME':
      return { ...state, nameFocus: !state.nameFocus };
    case 'STUDENT_ID':
      return { ...state, studentIdFocus: !state.studentIdFocus };
    case 'BAEKJOON_ID':
      return { ...state, baekjoonIdFocus: !state.baekjoonIdFocus };
    case 'DISCORD_ID':
      return { ...state, discordIdFocus: !state.discordIdFocus };
    case 'NOTION_EMAIL':
      return { ...state, notionEmailFocus: !state.notionEmailFocus };
    default:
      throw new Error('unknown action type');
  }
};

export const resetInput = (type, dispatchText, dispatchFocus) => {
  dispatchText({ type: type, text: '' });
  dispatchFocus({ type: type });
};

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const checkForm = (inputObject, dispatchText, dispatchFocus) => {
  let checkBool = true;
  Object.entries(inputObject).map(([key, value]) => {
    if (value.check()) {
      value.ref.current.placeholder = SIGNUP_PLACEHOLDER[key].ERROR_PLACEHOLDER;
      resetInput(key, dispatchText, dispatchFocus);
      checkBool = false;
    }
  });
  return checkBool;
};

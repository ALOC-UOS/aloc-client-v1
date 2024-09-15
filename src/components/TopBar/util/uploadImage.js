import { serverAPI } from '../../../api/axios';
export const uploadImage = async (
  selectedFile,
  setUserInfo,
  setselectedFile,
  setMessageText,
  passwordChangeMessage
) => {
  const formData = new FormData();
  formData.append('file', selectedFile);
  try {
    await serverAPI.post('/images/upload/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const response = await serverAPI.get('/user');
    setUserInfo(response.data.result);
    setselectedFile(null);
  } catch (error) {
    console.log(error);
    if (error.code === 'ERR_NETWORK') {
      setMessageText('이미지 용량이 너무 커요!');
      passwordChangeMessage.toast();
    }
  }
};

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/views/Main';
import Problem from '@/views/Problem';
import Member from '@/views/Member';
import About from '@/views/about';
import Project from '@/views/Project';
import Study from '@/views/StudyTemp';
import Shop from '@/views/Shop';
import Login from '@/views/Login';
import Admin from '@/views/Admin';
import { serverAPI, setupInterceptors } from '@/api/axios';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';
import GlobalStyles from '@/styles/global';

function App() {
  const { initLoginStatus } = useLoginState();
  const { setUserInfo, deleteUserInfo } = useUserState();

  useEffect(() => {
    setupInterceptors(initLoginStatus);
    serverAPI
      .get('/user')
      .then((response) => {
        const userInfo = response.data.result;
        localStorage.setItem('isLoggedIn', 'true');
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.error(error);
        initLoginStatus();
        deleteUserInfo();
      });
  }, []);
  
//   {
//   "isSuccess": true,
//   "code": "DUMMY_CODE",
//   "message": "Dummy data for testing",
//   "result": [
//     {
//       "username": "홍길동",
//       "githubId": "hong_git",
//       "baekjoonId": "hong_baekjoon",
//       "profileColor": "red",
//       "studentId": "21",
//       "authority": "ROLE_USER",
//       "rank": 10,
//       "coin": 150,
//       "course": "FULL",
//       "profileImageFileName": "hong_profile.jpg",
//       "solvedCount": 5,
//       "unsolvedCount": 1,
//       "todaySolved": false,
//       "colorCategory": "premium",
//       "color1": "#FF5733",
//       "color2": "#33FF57",
//       "color3": "#3357FF",
//       "color4": "#FFFFFF",
//       "color5": "#000000",
//       "degree": 90,
//       "createdAt": "2024-02-25T14:20:30"
//     },
//     {
//       "username": "이영희",
//       "githubId": "lee_git",
//       "baekjoonId": "lee_baekjoon",
//       "profileColor": "green",
//       "studentId": "22",
//       "authority": "ROLE_ADMIN",
//       "rank": 5,
//       "coin": 300,
//       "course": "PARTIAL",
//       "profileImageFileName": "lee_profile.png",
//       "solvedCount": 10,
//       "unsolvedCount": 3,
//       "todaySolved": true,
//       "colorCategory": "special",
//       "color1": "#AA00FF",
//       "color2": "#FFAA00",
//       "color3": "#00FFAA",
//       "color4": null,
//       "color5": null,
//       "degree": 45,
//       "createdAt": "2024-01-15T08:10:00"
//     },
//     {
//       "username": "박민수",
//       "githubId": "park_git",
//       "baekjoonId": "park_baekjoon",
//       "profileColor": "blue",
//       "studentId": "23",
//       "authority": "ROLE_USER",
//       "rank": 42,
//       "coin": 75,
//       "course": "FULL",
//       "profileImageFileName": "park_profile.jpeg",
//       "solvedCount": 2,
//       "unsolvedCount": 4,
//       "todaySolved": false,
//       "colorCategory": "basic",
//       "color1": "#008CFF",
//       "color2": "#FFA500",
//       "color3": "#FF4500",
//       "color4": "#32CD32",
//       "color5": "#8A2BE2",
//       "degree": 180,
//       "createdAt": "2024-03-01T12:00:00"
//     }
//   ]
// }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/study" element={<Study />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

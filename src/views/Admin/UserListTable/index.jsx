import S from './UserListTable.styles';
import { VStack, HStack } from '@/components/Stack';
import { useState } from 'react';

export const UserListTable = () => {

    const [users] = useState([
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_GUEST",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_GUEST",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
            {
                username: "김철수",
                githubId: "githubId123",
                baekjoonId: "baekjoon123",
                profileColor: "blue",
                studentId: "20",
                authority: "ROLE_USER",
                rank: 31,
                coin: 100,
                course: "FULL",
                profileImageFileName: "profile.jpg",
                solvedCount: 3,
                unsolvedCount: 2,
                todaySolved: true,
                colorCategory: "special",
                color1: "#FFB800",
                color2: "#FF69F0",
                color3: "#408CFF",
                color4: null,
                color5: null,
                degree: 135,
                createdAt: "2024-03-04T19:37:55"
            },
            {
                username: "이영희",
                githubId: "youngheeGH",
                baekjoonId: "youngheeBJ",
                profileColor: "green",
                studentId: "21",
                authority: "ROLE_GUEST",
                rank: 15,
                coin: 200,
                course: "BASIC",
                profileImageFileName: "profile2.jpg",
                solvedCount: 5,
                unsolvedCount: 1,
                todaySolved: false,
                colorCategory: "normal",
                color1: "#FFA500",
                color2: "#00FF00",
                color3: "#0000FF",
                color4: null,
                color5: null,
                degree: 90,
                createdAt: "2024-02-15T12:00:00"
            },
        ]);

    // function openProblemListModal(type, githubId) {
    //     const url = `${import.meta.env.VITE_API_BASE_URL}/user/${githubId}/${type === 'solved' ? 'solved' : 'unsolved'}-problems?routine=DAILY&season=3`;
    //     setModalTitle(type === 'solved' ? '해결한 문제 목록' : '해결하지 못한 문제 목록');
    
    //     axios
    //         .get(url)
    //         .then((response) => {
    //         setProblemListData(response.data.result);
    //         setIsOpenedModal(true);
    //         setSelectedGithubId(githubId);
    //         setSelectedType(type);
    //         })
    //         .catch((error) => {
    //         console.error(error, 'API 요청 중 오류 발생:');
    //         });
    //     }

    return (
    <S.TableContainer>
        <table>
            <thead>
                <tr>
                    <th>유저 이름</th>
                    <th>깃허브 아이디</th>
                    <th>랭크</th>
                    <th>코인 개수</th>
                    <th>유저 수정</th>
                    <th>정회원 전환</th>
                    <th>졸업생 전환</th>
                    <th>유저 삭제</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <S.Tableborder>{user.username}</S.Tableborder>
                        <S.Tableborder>{user.githubId}</S.Tableborder>
                        <S.Tableborder>{user.rank}</S.Tableborder>
                        <S.Tableborder>{user.coin}</S.Tableborder>
                        <S.Tableborder>{user.authority}</S.Tableborder>
                        <S.Tableborder>
                            {user.authority === "ROLE_GUEST" ? (
                                <button onClick={() => console.log("정회원")}>
                                    정회원 전환
                                </button>
                            ) : <div>정회원</div>}
                        </S.Tableborder>
                        <S.Tableborder>
                            {user.authority !== "ROLE_GRADUATED" ? (
                                <button onClick={() => console.log("졸업생")}>
                                    졸업생 전환
                                </button>
                            ) : <div>졸업생</div>}
                        </S.Tableborder>
                        <S.Tableborder>
                            <button onClick={() => console.log("삭제")}>유저 삭제</button>
                        </S.Tableborder>
                    </tr>
                ))}
            </tbody>
        </table>
    </S.TableContainer>
    );
}
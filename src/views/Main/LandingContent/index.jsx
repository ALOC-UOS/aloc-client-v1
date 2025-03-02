import S from './LandingContent.styles';
import { VStack, HStack } from '@/components/Stack';
import { useState } from 'react';

import LogoBlack from '../../../assets/images/logo.season2.dark.png'
import LogoWhite from '../../../assets/images/logo.season2.white.svg'
import AlocLogo from '../../../assets/images/aloc-text.svg'
import Study from '../../../assets/images/Study.svg'
import Network from '../../../assets/images/Network.svg'
import Sharing from '../../../assets/images/Sharing.svg'

import { useEffect } from 'react';


const Logo3D = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // 마우스가 올라갔는지 상태 추가

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // 마우스 위치를 로고 중심 기준으로 변환
    const x = (clientX - left - width / 2) / width;
    const y = (clientY - top - height / 2) / height;

    // 회전 값 설정 (격하게 움직이도록 각도 증가)
    setRotate({ x: y * 50, y: -x * 50 });
    setIsHovered(true); // 마우스를 올린 상태 유지
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 }); // 원래 위치로 복귀
    setIsHovered(false); // 마우스가 떠나면 원래 크기로
  };

  const handleClick = () => {
    setIsClicked((prev) => !prev); // 클릭 시 확대/축소 전환
  };

  return (
    <img
      src={LogoWhite}
      alt="Aloc 로고"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        width: "250px",
        height: "auto",
        cursor: "pointer",
        transform: `
          rotateX(${rotate.x}deg)
          rotateY(${rotate.y}deg)
          scale(${isHovered ? 1.2 : 1})`, // 마우스 올리면 1.2배
        transition: "transform 0.07s ease-in-out", // 부드러운 애니메이션 효과
        transformStyle: "preserve-3d",
      }}
    />
  );
};

// 랜딩페이지 완성 후 코드 분리 및 정리 필요

const LandingContent = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  return (
    <>
      {/* 메인 화면(완성) */}
      <S.MainContainer backgroundColor="#FFB800">
        {/* <S.ContentWrapper color="#FFFFFF"> */}
        {/* <img src={LogoWhite} alt="Aloc로고" style={{ width: '250px', height: 'auto',}} /> */}
        <Logo3D />       
          <VStack alignItems="center" gap={13}>
            <S.Callout color="#000000">At Least One Coding</S.Callout>
            <S.Title>ALOC</S.Title>
            {/* <div style={{ color: '#000000', fontSize: '20px' }}>
              ALOC은 개발에 대한 열정을 가진 모두를 위해, 프로젝트와 스터디를 기반으로 성장하는
              서울시립대학교 컴퓨터과학부 공식 소모임입니다.
            </div> */}
            <S.Callout2 color="#000000">ALOC은 개발에 대한 열정을 가진 모두를 위해, 프로젝트와 스터디를 기반으로
              성장하는 서울시립대학교 컴퓨터과학부 공식 소모임입니다. </S.Callout2>
          </VStack>
        {/* </S.ContentWrapper> */}
      </S.MainContainer>

      {/* 첫 번째 프레임(이미지 정렬 및 설명 추가 필요) */}
      <S.InfoContainer backgroundColor='#FFFFFF'>
        <VStack style={{padding: '20px 50px'}}>
          <S.DefaultText color="#7408FF" fontSize="15px">*모임 일정 : 매주 월요일 저녁 7시*</S.DefaultText>
          <S.DefaultText fontSize="50px">ALOC 활동</S.DefaultText>
        </VStack>
        <HStack  style={{padding: '30px 50px', width: '100vw'}} gap={30} justifyContent='space-between'>
        {[
      { title: '프로젝트', desc1: '첫번째줄 설명', desc2: '두번째줄 설명', img: 'Project'},
      { title: '스터디', desc1: '첫번째줄 설명', desc2: '두번째줄 설명', img: Study},
      { title: '네트워킹', desc1: '첫번째줄 설명', desc2: '두번째줄 설명', img: Network},
      { title: '지식공유회', desc1: '첫번째줄 설명', desc2: '두번째줄 설명', img: Sharing },
    ].map((item, index) => (
      <S.InfoWrapper key={index} style={index % 2 === 1 ? { marginTop: '150px' } : { marginBottom: '150px'}}>
        <div style={{color: '#FFFFFF', fontSize: '30px', fontWeight: 'bold',}}>{item.title}</div>
        <div style={{color: '#B9B9B9', fontSize: '20px', fontWeight: 'bold', marginTop: '20px',}}>{item.desc1}</div>
        <div style={{color: '#B9B9B9', fontSize: '20px', fontWeight: 'bold',}}>{item.desc2}</div>
        <img src={item.img} style={{width: '250px', height: 'auto'}}/>
      </S.InfoWrapper>
    ))}
        </HStack>
      </S.InfoContainer>
      
      {/* 두 번째 프레임(완성)*/}
      <S.InfoContainer backgroundColor='#DFDFDF'>
        <VStack style={{padding: '50px'}}>
          <S.DefaultText fontSize='15px' color='#7408FF'>스터디와 프로젝트 적극 지원하며 체계적인 관리를 통해 목표 달성을 돕습니다.</S.DefaultText>
          <S.DefaultText fontSize='40px'>ALOC 활동 지원</S.DefaultText>
          <S.DefaultText fontSize='30px' style={{ marginTop: '30px' }}>“도서·인강 등 학습 지원비와 선후배 Q&A 기회로 여러분의 성장을 돕는 ALOC, 함께하세요!”</S.DefaultText>
        </VStack>
        <img src={LogoBlack} alt="Aloc로고"
          style={{
            width: '500px',
            position: 'absolute',
            marginLeft: '65vw',
            zIndex: '-1',
          }}
        />
      </S.InfoContainer>

      {/* 세 번째 프레임(사진 삽입 및 설명 추가 필요)*/}
      <S.InfoContainer backgroundColor='#FFFFFF'>
        <HStack style={{width: '100vw'}} justifyContent='center'>
          <VStack style={{padding: '50px'}}>
            <S.DefaultText fontSize='15px' color='#7408FF' style={{ textAlign: 'center' }}>작년에 진행한 ALOC 활동 사진입니다.</S.DefaultText>
            <S.DefaultText fontSize='50px' style={{ textAlign: 'center' }}>ALOC 활동 사진</S.DefaultText>
          </VStack>
        </HStack>
      </S.InfoContainer>

      {/* 네 번째 프레임(완성) */}
      <S.InfoContainer backgroundColor='#000000'>
        <HStack style={{ padding: '10px', width: '100vw' }} justifyContent="space-between">
          <VStack>
            <S.BottomText>회장 박주영 010-9421-0269</S.BottomText>
            <S.BottomText>부회장 김동현 010-9296-5747</S.BottomText>
          </VStack>
          <VStack>
            <S.BottomText>University of Seoul</S.BottomText>
            <S.BottomText>Computer Science</S.BottomText>
          </VStack>
          <HStack>
            <img src={LogoWhite} alt="Aloc로고" style={{ height: '40px', width: 'auto'}}/>
            <img src={AlocLogo} alt="Aloc로고" style={{ height: '40px', width: 'auto'}}/>
          </HStack>
        </HStack>
      </S.InfoContainer>
    </>
  );
};

export default LandingContent;
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

const Confetti = () => {
  const decorateOptions = originalOptions => {
    return {
      ...originalOptions,
      particleCount: 200, // 조각 개수 설정
      spread: 120, // 퍼짐 정도 설정
      startVelocity: 50, // 초기 속도 설정
      ticks: 200, // 애니메이션 지속 시간 설정
      origin: { y: 0.8 }, // 발사 위치 설정
      shapes: ['circle', 'circle', 'square'], // 이미지 배열을 shapes로 설정
      gravity: 1.5, // 중력 설정
    };
  };
  return (
    <Fireworks
      width={window.innerWidth}
      height={window.innerHeight}
      autorun={{ speed: 0.5, duration: 4, delay: 500 }}
      decorateOptions={decorateOptions}
      style={{
        position: 'fixed',
        zIndex: 1000,
      }}
    />
  );
};

export default Confetti;

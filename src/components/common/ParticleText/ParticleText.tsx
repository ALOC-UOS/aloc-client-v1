import { useEffect, useRef } from 'react';
import S from './ParticleText.style';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  ease: number;
  friction: number;
  distanceFromMouse: number;
}

interface ParticleTextProps {
  title: string;
}

const ParticleText = ({ title }: ParticleTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleRef = useRef<string>(title);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // 캔버스 크기 설정
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 파티클 생성 함수
    const createParticles = (): Particle[] => {
      const particles: Particle[] = [];

      // 텍스트 그리기
      ctx.font = 'bold 200px Pretendard';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 텍스트 측정
      const titleTextWidth = ctx.measureText(titleRef.current).width;
      const fontSize = 200;

      // 텍스트 그리기
      ctx.fillText(titleRef.current, canvas.width / 2, canvas.height / 2);

      // 픽셀 데이터 가져오기
      const imageData = ctx.getImageData(
        (canvas.width - titleTextWidth) / 2,
        canvas.height / 2 - fontSize / 2,
        titleTextWidth,
        fontSize
      );

      // 파티클 생성
      for (let y = 0; y < imageData.height; y += 3) {
        for (let x = 0; x < imageData.width; x += 3) {
          const index = (y * imageData.width + x) * 4;
          const alpha = imageData.data[index + 3];

          if (alpha > 128) {
            const particle: Particle = {
              x: x + (canvas.width - titleTextWidth) / 2,
              y: y + canvas.height / 2 - fontSize / 2,
              originX: x + (canvas.width - titleTextWidth) / 2,
              originY: y + canvas.height / 2 - fontSize / 2,
              size: 2,
              color: `rgb(${imageData.data[index]}, ${imageData.data[index + 1]}, ${imageData.data[index + 2]})`,
              vx: 0,
              vy: 0,
              ease: 0.1,
              friction: 0.7,
              distanceFromMouse: 0,
            };
            particles.push(particle);
          }
        }
      }

      return particles;
    };

    // 파티클 업데이트 및 렌더링 함수
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // 마우스와의 거리 계산
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        // 마우스와 가까울수록 더 많이 움직임
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx -= dx * force * 0.2;
          particle.vy -= dy * force * 0.2;
        }

        // 원래 위치로 돌아가려는 힘
        particle.vx += (particle.originX - particle.x) * particle.ease;
        particle.vy += (particle.originY - particle.y) * particle.ease;

        // 속도 적용
        particle.vx *= particle.friction;
        particle.vy *= particle.friction;

        // 위치 업데이트
        particle.x += particle.vx;
        particle.y += particle.vy;

        // 그리기
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });

      requestRef.current = requestAnimationFrame(updateParticles);
    };

    // 초기화
    particlesRef.current = createParticles();
    updateParticles();

    // 마우스 이벤트 핸들러
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // 이벤트 리스너 등록
    setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, 3000);

    // 창 크기 변경 시 리사이즈
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles();
    };

    window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return <S.ParticleCanvas ref={canvasRef} />;
};

export default ParticleText;

import GoogleLoginModal from '@/components/common/GoogleLogin/GoogleLoginModal';
import useModal from '@/hooks/useModal';
import Button from '@/components/common/Button';
import { tierStyleConfig } from '@/styles/tier.config';
import { Tier } from '@/types/tier.types';

const LandingPage = () => {
  const { isOpen, show, hide } = useModal();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        position: 'relative',
      }}
    >
      {/* Optimized Static Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #000 0%, #0a0a0a 25%, #1a1a2e 50%, #16213e 75%, #0f3460 100%)
        `,
          zIndex: -1,
        }}
      />

      {/* Simplified Particles */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              backgroundColor: `hsl(${Math.random() * 120 + 200}, 70%, ${Math.random() * 30 + 50}%)`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `simpleFloat ${Math.random() * 8 + 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Hero Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '4rem 8rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              animation: 'gentleFloat 8s ease-in-out infinite',
            }}
          >
            <div
              style={{
                marginBottom: '3rem',
                position: 'relative',
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  fontWeight: '900',
                  margin: '0',
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.03em',
                  animation: 'gentleGradient 6s ease-in-out infinite',
                }}
              >
                ALOC
              </h1>
            </div>

            <p
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                margin: '0 0 3rem 0',
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: '400',
              }}
            >
              알고리즘 공부를 더 재미있게
            </p>

            <Button
              variant="primary"
              onClick={show}
              style={{
                padding: '1.2rem 3rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                border: 'none',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
              }}
            >
              🚀 지금 시작하기
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'gentleBounce 3s infinite',
            }}
          >
            <div
              style={{
                width: '1px',
                height: '30px',
                background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4))',
                margin: '0 auto 8px',
              }}
            />
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.85rem',
                margin: 0,
              }}
            >
              Scroll
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section
          style={{
            padding: '6rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '5rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: 'white',
              }}
            >
              두 가지 스터디 방식
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0',
              }}
            >
              원데이와 데드라인 방식 중 선택하세요
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem',
              marginTop: '4rem',
            }}
          >
            {/* One-Day Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '1.2rem',
                  background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
                  borderRadius: '50%',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>📅</span>
              </div>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  margin: '0 0 1rem 0',
                  color: '#3b82f6',
                }}
              >
                원데이 (One-Day)
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: '1rem 0',
                  lineHeight: '1.6',
                }}
              >
                하루에 한 문제를 꼭 풀어야 해요.
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: '0',
                  fontStyle: 'italic',
                }}
              >
                * 하루라도 못풀면 실패
              </p>
            </div>

            {/* Deadline Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '1.2rem',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  borderRadius: '50%',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>⏰</span>
              </div>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  margin: '0 0 1rem 0',
                  color: '#8b5cf6',
                }}
              >
                데드라인 (Deadline)
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  margin: '1rem 0',
                  lineHeight: '1.6',
                }}
              >
                지정된 기간동안 준비된 문제를 모두 풀어야해요.
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  margin: '0',
                  fontStyle: 'italic',
                }}
              >
                * 기간이 지나면 실패
              </p>
            </div>
          </div>
        </section>

        {/* Tier Section */}
        <section
          style={{
            padding: '6rem 2rem',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              margin: '0 0 1.5rem 0',
              color: 'white',
            }}
          >
            백준 티어 시스템
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0 0 3rem 0',
            }}
          >
            백준 아이디를 입력하여 티어를 확인하세요
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {['unranked', 'bronze', 'silver', 'gold', 'platinum', 'diamond', 'ruby'].map(
              (tier, index) => (
                <TierIcon key={tier} tier={tier as Tier} index={index} />
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: '6rem 2rem',
            textAlign: 'center',
            background: 'rgba(2, 3, 14, 0.8)',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: 'white',
              }}
            >
              지금 바로 시작해보세요!
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0 0 2.5rem 0',
              }}
            >
              알고리즘 공부의 새로운 경험을 시작하세요
            </p>
            <Button
              variant="primary"
              onClick={show}
              style={{
                padding: '1.2rem 3rem',
                fontSize: '1.2rem',
                fontWeight: '600',
                borderRadius: '50px',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                border: 'none',
                boxShadow: '0 12px 30px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.3)';
              }}
            >
              ✨ 무료로 가입하기
            </Button>
          </div>
        </section>
      </div>

      <GoogleLoginModal isOpen={isOpen} onClose={hide} />

      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes gentleGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gentleBounce {
          0%, 20%, 53%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40%, 43% { transform: translateX(-50%) translateY(-10px); }
          70% { transform: translateX(-50%) translateY(-5px); }
        }

        @keyframes simpleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-15px); opacity: 0.8; }
        }

        * {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

const TierIcon = ({ tier, index }: { tier: Tier; index: number }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        padding: '1.5rem 1rem',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
      }}
    >
      <div
        style={{
          padding: '0.8rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
        }}
      >
        <img
          src={tierStyleConfig[tier].icon.small}
          alt={tier}
          width={48}
          height={48}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <span
        style={{
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textTransform: 'capitalize',
          fontWeight: '500',
        }}
      >
        {tier}
      </span>
    </div>
  );
};

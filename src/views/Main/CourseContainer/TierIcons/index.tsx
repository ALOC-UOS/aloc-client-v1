import { useEffect, useRef } from 'react';
import S from './style';
import { gsap } from 'gsap';
import { TierStyleConfig } from '@/types/tier.types';

interface TierIconsProps {
  tier: TierStyleConfig;
}

const TierIcons = ({ tier }: TierIconsProps) => {
  const bigTierIconWrapperRef = useRef(null);
  const bigTierIconRef = useRef(null);
  const smallIconWrapperRef = useRef(null);
  const smallIconRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const iconAnimation = {
      duration: 2,
      ease: 'power1.inOut',
    };

    tl.to(bigTierIconRef.current, {
      ...iconAnimation,
      opacity: 1,
      rotationY: 360,
    }).to(
      bigTierIconRef.current,
      {
        ...iconAnimation,
        y: -40,
        yoyo: true,
        repeat: -1,
      },
      '<'
    );

    tl.to(
      smallIconRef.current,
      {
        ...iconAnimation,
        opacity: 1,
        rotationY: 360,
        delay: 0.3,
      },
      0.3
    ).to(
      smallIconRef.current,
      {
        ...iconAnimation,
        y: -24,
        yoyo: true,
        repeat: -1,
      },
      '<'
    );

    const wrapperAnimation = {
      duration: 2,
      scale: 1,
      ease: 'power1.inOut',
    };

    tl.to(bigTierIconWrapperRef.current, wrapperAnimation, 0).to(
      smallIconWrapperRef.current,
      wrapperAnimation,
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 'calc(50% - 240px)',
          left: 'calc(50% - 420px)',
          transform: 'skew(10deg, 10deg) scale(0.5)',
          width: 400,
          height: 400,
        }}
        ref={bigTierIconWrapperRef}
      >
        <S.TierIcon
          src={tier.icon.circle}
          alt="tier-icon"
          ref={bigTierIconRef}
          backgroundColor={tier.backgroundColor}
        />
      </div>
      <div
        style={{
          position: 'fixed',
          top: 'calc(50% + 70px)',
          left: 'calc(50% + 190px)',
          transform: 'skew(-20deg, 10deg) scale(0.5)',
          width: 200,
          height: 200,
        }}
        ref={smallIconWrapperRef}
      >
        <S.TierIcon
          src={tier.icon.circle}
          alt="tier-icon"
          ref={smallIconRef}
          backgroundColor={tier.backgroundColor}
        />
      </div>
    </>
  );
};

export default TierIcons;

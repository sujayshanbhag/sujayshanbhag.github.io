import styled, { createGlobalStyle } from "styled-components";
import { Bio, LATEST_PROJECT_URL } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/hero.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 30px 80px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 58px 16px 66px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 35%;
  max-width: 300px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow:
    20px 20px 60px #1f2634,
    -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.1;
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 14px 0;
    font-size: 18px;
    width: 100%;
    max-width: 100%;
  }
`;

const BorderAnimGlobal = createGlobalStyle`
    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes spinAngle {
      from { --angle: 0deg; }
      to   { --angle: 360deg; }
    }
  `;

/* Wrapper carries the rainbow conic border via padding */
const GlowingButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 50px;
  padding: 3px;
  width: 45%;
  max-width: 300px;
  background-image: conic-gradient(
    from var(--angle),
    hsla(282, 100%, 50%, 1) 0deg 288deg,
    #ffffff 288deg 360deg
  );
  animation: 3s spinAngle linear infinite;
  transition:
    transform 0.2s ease,
    filter 0.15s ease;

  /* Glow behind */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50px;
    background-image: conic-gradient(
      from var(--angle),
      hsla(282, 100%, 50%, 1) 0deg 288deg,
      #ffffff 288deg 360deg
    );
    animation: 3s spinAngle linear infinite;
    filter: blur(1.5rem);
    opacity: 0.5;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.04) translateY(-2px);
  }

  @media (max-width: 960px) {
    margin-left: 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
  }
`;

/* Inner anchor — solid purple fill, sits inside the 3px rainbow padding */
const GlowingButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  text-align: center;
  padding: 14px 0;
  color: white;
  border-radius: 47px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 16px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: -8px;
  margin-bottom: 18px;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <BorderAnimGlobal />
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ButtonsRow>
                <GlowingButtonWrapper>
                  <GlowingButton href={LATEST_PROJECT_URL} target="_blank">
                    Visit my latest project
                  </GlowingButton>
                </GlowingButtonWrapper>
                <ResumeButton href={Bio.resume} target="_blank">
                  Resume
                </ResumeButton>
              </ButtonsRow>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Rishav Chanda" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;

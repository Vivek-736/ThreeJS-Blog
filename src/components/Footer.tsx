import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 25px;
  background: linear-gradient(
    145deg,
    rgba(128, 128, 128, 0.2),
    rgba(169, 169, 169, 0.15)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  max-width: max-content;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(
      145deg,
      rgba(128, 128, 128, 0.25),
      rgba(169, 169, 169, 0.2)
    );
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const HeartIcon = styled.span`
  color: #ff69b4;
  filter: drop-shadow(0 0 2px rgba(255, 105, 180, 0.4));
`;

const Footer = () => {
  return (
    <FooterContainer>
      Engraved with <HeartIcon>💖</HeartIcon> by Vivek
    </FooterContainer>
  );
};

export default Footer;

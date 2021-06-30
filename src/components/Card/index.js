import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  color: ${(props) => (props.color ? props.color : "#FFF")};
  background: ${(props) => (props.bg ? props.bg : "var(--primary)")};
  padding: 20px 30px;
  border-radius: var(--border);
`;

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    margin-bottom: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop.min}) {
      display: block;
      margin-bottom: 0;
    }
  }
`;

const Img = styled.img`
  border-radius: var(--border);
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.color ? props.color : "#FFF")};
  margin-bottom: 8px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop.min}) {
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  text-align: center;
  margin: 25px auto 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop.min}) {
    margin-top: 28px;
    text-align: left;
  }
`;

export { ImageWrapper, Title, Text, Footer, Img };

export default Card;

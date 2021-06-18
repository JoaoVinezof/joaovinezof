import styled from "styled-components";

const Margin = styled.div`
  ${(props) => {
    if (props.marginBottom) {
      return `margin-bottom: ${props.marginBottom}`;
    } else if (props.marginTop) {
      return `margin-top: ${props.marginTop}`;
    } else if (props.marginLeft) {
      return `margin-left: ${props.marginLeft}`;
    } else if (props.marginRight) {
      return `margin-right: ${props.marginRight}`;
    } else {
      return `margin: ${props.margin}`;
    }
  }}
`;

export default Margin;

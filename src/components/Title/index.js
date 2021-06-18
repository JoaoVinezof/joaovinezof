import React from "react";

import { Wrapper } from "./styles";

const Title = ({ level, children }) => {
  const Level = `h${level || 1}`;
  return (
    <Wrapper>
      <Level>{children}</Level>
    </Wrapper>
  );
};

export default Title;

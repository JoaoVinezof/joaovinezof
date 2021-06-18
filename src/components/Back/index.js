import React from "react";

import { BackParagraph } from "./styes";

import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";

const Back = ({ to, children }) => (
  <BackParagraph to={to}>
    <LeftArrowAlt />
    {children}
  </BackParagraph>
);

export default Back;

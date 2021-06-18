import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Wrapper } from "./styles";

const HeaderPicture = () => (
  <Wrapper>
    <StaticImage
      src="../../images/header.jpg"
      alt="Foto de João Vinezof"
      placeholder="blurred"
    />
  </Wrapper>
);

export default HeaderPicture;

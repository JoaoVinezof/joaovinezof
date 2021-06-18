import React from "react";

import Container from "../Container";
import { Columns, Column } from "../Grid";
import TitleAndSubtitle from "../TitleAndSubtitle";
import HeaderPicture from "../HeaderPicture";
import Bio from "../Bio";
import SocialLinks from "../SocialLinks";

const Header = () => (
  <Container>
    <Columns>
      <Column>
        <TitleAndSubtitle />
        <Bio />
        <SocialLinks />
      </Column>
      <Column viewport="desktop">
        <HeaderPicture />
      </Column>
    </Columns>
  </Container>
);

export default Header;

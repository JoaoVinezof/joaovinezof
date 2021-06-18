import React from "react";

import { Wrapper, Title, Description } from "./styled";
import Link from "../Link";

const LastPostItem = ({ title, description, slug }) => (
  <Wrapper>
    <Title level={3}>
      <Link to={slug}>{title}</Link>
    </Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default LastPostItem;

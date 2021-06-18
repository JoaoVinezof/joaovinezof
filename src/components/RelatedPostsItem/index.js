import React from "react";

import { Wrapper, Link } from "./styles";

const RelatedPostsItem = ({ title, slug }) => (
  <Wrapper>
    <Link to={slug}>{title}</Link>
  </Wrapper>
);

export default RelatedPostsItem;

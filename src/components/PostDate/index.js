import React from "react";

import { Wrapper } from "./styles.js";

const PostDate = ({ date, timeToRead, country }) => (
  <Wrapper>
    {date} - {country || "Brasil"} • {timeToRead} <span>min de leitura</span>
  </Wrapper>
);

export default PostDate;

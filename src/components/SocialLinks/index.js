import React from "react";

import { Wrapper, SocialLink } from "./styles";

import data from "./data";

const SocialLinks = () => (
  <Wrapper>
    {data.map((link, index) => (
      <SocialLink
        key={index}
        href={link.href}
        title={link.title}
        target="_blank"
        rel="noopener noreferrer"
        isExternal
      >
        {link.title}
      </SocialLink>
    ))}
  </Wrapper>
);

export default SocialLinks;

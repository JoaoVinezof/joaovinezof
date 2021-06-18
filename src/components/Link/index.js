import React from "react";

import { A, Link as GatsbyLink } from "./styles";

const Link = (props) => {
  return props.isExternal ? <A {...props} /> : <GatsbyLink {...props} />;
};

export default Link;

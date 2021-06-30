import React from "react";

import { A, Link as GatsbyLink } from "./styles";

const Link = (props) => {
  return props.isExternal ? (
    <A {...props} />
  ) : (
    <GatsbyLink paintDrip duration={0.7} hex="#F80759" {...props} />
  );
};

export default Link;

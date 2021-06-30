import React from "react";
import LastPostItem from "../LastPostsItem";

const Hit = ({ hit }) => (
  <LastPostItem
    title={hit.title}
    description={hit.description}
    slug={hit.fields.slug}
  />
);

export default Hit;

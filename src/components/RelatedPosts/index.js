import React from "react";

import { Wrapper, List } from "./styles";
import Title from "../Title";
import RelatedPostsItem from "../RelatedPostsItem";

const RelatedPosts = ({ relatedPosts }) => (
  <Wrapper>
    <Title level={3}>Posts relacionados</Title>
    <List>
      {relatedPosts.map((post, index) => {
        return (
          <RelatedPostsItem
            key={index}
            title={post.node.frontmatter.title}
            slug={post.node.fields.slug}
          />
        );
      })}
    </List>
  </Wrapper>
);

export default RelatedPosts;

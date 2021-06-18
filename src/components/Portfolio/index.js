import React from "react";

import { Wrapper, Cards } from "./styles";
import { Container } from "../Container";
import Title from "../Title";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const {
    allProjectsJson: { edges },
  } = useStaticQuery(graphql`
    query allPortfolioItems {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            date(formatString: "YYYY", locale: "pt-br")
            job
            color
            image
            link
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Container>
        <Title level={2}>Portfólio</Title>
        <Cards>
          {edges.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.node.title}
              description={item.node.description}
              date={item.node.date}
              job={item.node.job}
              color={item.node.color}
              image={`http://localhost:8000${item.node.image}`}
              link={item.node.link}
            />
          ))}
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;

import React from "react";
import { Column, Columns } from "../Grid";
import { ColumnImage } from "./styles";
import Card, { Footer, ImageWrapper, Text, Title as CardTitle } from "../Card";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button";

const PortfolioItem = ({
  title,
  description,
  date,
  job,
  color,
  image,
  link,
}) => (
  <Card bg={color}>
    <Columns>
      <ColumnImage>
        <ImageWrapper>
          <StaticImage
            src={image}
            alt="Header do portfolio"
            placeholder="blurred"
          />
        </ImageWrapper>
      </ColumnImage>
      <Column align="center">
        <CardTitle>{title}</CardTitle>
        <Text>{description}</Text>
        <Text>
          {date} - {job}
        </Text>
        <Footer>
          {link && (
            <Button as="a" href={link} target="blank" rel="noopener noreferrer">
              Ver projeto
            </Button>
          )}
        </Footer>
      </Column>
    </Columns>
  </Card>
);

export default PortfolioItem;

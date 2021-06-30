import React from "react";

import { Column, Columns } from "../Grid";
import { ColumnImage } from "./styles";
import Card, {
  Footer,
  ImageWrapper,
  Text,
  Title as CardTitle,
  Img as CardImage,
} from "../Card";
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
          <CardImage src={image} alt="Header do portfolio" />
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

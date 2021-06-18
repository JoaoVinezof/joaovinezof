import styled from "styled-components";
import { Column } from "../Grid";

export const ColumnImage = styled(Column)`
  margin: 0 !important;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop.min}) {
    margin-right: 65px !important;
  }
`;

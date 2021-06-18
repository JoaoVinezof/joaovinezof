import styled, { css } from "styled-components";

const onlyDesktop = css`
  display: none;

  @media(min-width: ${props => props.theme.breakpoints.desktop.min}) {
    display: block;
  }
`

const Column = styled.div`
  flex: 1;
  align-self: ${props => props.align ? props.align : 'flex-start'};

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop.min}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  ${props => props.spacingDesktop ? props.spacingDesktop : ''}

  ${props => props.viewport === 'desktop' ? onlyDesktop : ''}
`

const Columns = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${props => props.theme.breakpoints.desktop.min}) {
    flex-direction: row;
  }
`

export {
  Columns,
  Column
}

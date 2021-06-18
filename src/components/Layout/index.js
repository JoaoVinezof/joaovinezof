import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme";

import { Wrapper, Main, Footer, Cta, Copy } from "./styles";
import Button from "../Button";

const Layout = ({ children }) => (
  <Wrapper>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        {children}
        <Footer>
          <Cta>
            <Button variant={"primary"}>Enviar uma mensagem</Button>
          </Cta>
          <Copy>
            <span role="img" aria-label="Copyright">
              ©️ 2021 -
            </span>
            <strong>João Vinezof</strong>.
          </Copy>
        </Footer>
      </Main>
    </ThemeProvider>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

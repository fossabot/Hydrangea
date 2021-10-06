// region WEBPACK_NONCE

import Logger from "./core/logger/Logger";
import { getNonce } from "get-nonce";

const logger = new Logger("Render");
logger.pInfo("Set nonce code.");
__webpack_nonce__ = "zxNLsxLiu9XeW8fgHl3PtQ=="
logger.pInfo(" > " + getNonce());

// end region

import * as React from "react";
import * as ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/styles/Theme";
import { GeneralStyle } from "./components/styles/GeneralStyle";
import { TitleBar } from "./components/TitleBar";

const container = document.getElementById("contents");

ReactDom.render(
  <ThemeProvider theme={theme}>
      {}
      <TitleBar/>
      <GeneralStyle />
  </ThemeProvider>
  , container
);
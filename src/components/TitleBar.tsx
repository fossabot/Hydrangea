import * as React from "react";
import { useState } from "react";

import { styled } from "./styles/Theme";
import { __title_bar_provider__ } from "../global";

export const TitleBar = () => {
    const [isMaximized, setMaximized] = useState<boolean>();
    const minimizeHandler = () => window.titlebar.onMinimize();
    const exitHandler = () => window.titlebar.onExit();
    const maximizeHandler = () => {
        window.titlebar.onMaximize();
        setMaximized(true);
    }
    const un_maximizeHandler = () => {
        window.titlebar.onUnMaximize();
        setMaximized(false);
    }

    return (
      <Container>
        <ExitButton onClick={exitHandler} aria-label={"閉じる"}>
          <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 12"}>
            <polygon fill="white" fillRule="evenodd"
                     points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"/>
          </svg>
        </ExitButton>
        { isMaximized ?
            <Button onClick={un_maximizeHandler} aria-label={"元に戻す"}>
              <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 12"}>
                <rect fill="none" stroke="white" width="12" height="12" fillRule="evenodd" />
              </svg>
            </Button>
          :
            <Button onClick={maximizeHandler} aria-label={"最大化"}>
              <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 12"}>
                <rect fill="none" stroke="white" width="12" height="12" fillRule="evenodd" />
              </svg>
            </Button>
        }
        <Button onClick={minimizeHandler} aria-label={"最小化"}>
          <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 1"}>
            <rect fill="none" stroke="white" width="12" height="0.5" fillRule="evenodd" />
          </svg>
        </Button>
      </Container>
    );
}

const Container = styled.div`
  top: 0;
  height: 20px;
  display: flex;
  align-items: stretch;
  -webkit-app-region: drag;
  flex-direction: row-reverse;
  background-color: ${(t): string => t.theme.FOREGROUND};
`;

const Button = styled.div`
  top: -4px;
  width: 30px;
  height: 20px;
  float: right;
  background-color: #2F3136;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ExitButton = styled.div`
  top: -4px;
  width: 30px;
  height: 20px;
  background-color: #2F3136;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgba(244, 67, 54, 0.5);
  }
`;
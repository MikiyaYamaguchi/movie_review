/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Container = (props: LayoutProps) => {
  const container = css`
    max-width: 1200px;
    margin: 0 auto;
  `;
  const { children } = props;
  return <div css={container}>{children}</div>;
};

export default Container;

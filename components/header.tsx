/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";
import { Layout } from "antd";
import Image from "next/image";

const { Header } = Layout;

const HeaderParts = () => {
  const header = css`
    padding: 0;
    background: var(--subBgColor);
    .container {
      padding: 0 2%;
      max-width: 100%;
      height: 100%;
    }
    .logo {
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
      }
      @media (max-width: 767px) {
        font-size: 22px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  `;
  return (
    <Header css={header}>
      <div className="container">
        <div className="logo">
          <Image
            src="logo_icon.svg"
            alt="My Movie Review"
            width={40}
            height={40}
          />
          My Movie Review
        </div>
      </div>
    </Header>
  );
};

export default HeaderParts;

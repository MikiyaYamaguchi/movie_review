/** @jsxImportSource @emotion/react */

"use client";
import { css } from "@emotion/react";
import React from "react";

import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const SiderParts = () => {
  const sider = css`
    background: var(--baseBgColor);
    ul {
      background: var(--baseBgColor);
      li {
        &.ant-menu-item-selected {
          background: #d32f2f;
        }
      }
    }
  `;
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      css={sider}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default SiderParts;

"use client";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterParts = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      My Movie Review ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterParts;

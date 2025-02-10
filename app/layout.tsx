import { Layout } from "antd";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Sider from "@/components/sider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Layout>
            <Sider />
            <Layout>
              <div className="contentWrap">{children}</div>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}

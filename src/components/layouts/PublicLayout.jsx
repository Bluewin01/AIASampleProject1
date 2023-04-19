import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import logo from "../../assets/AIA-logo.png";
import bgimage from "../../assets/AIA-bg.jpg";

const { Header, Sider, Content } = Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const StyledSider = styled(Sider)`
  background: #ff2c2c !important;
`;
const StyledMenu = styled(Menu)`
  background: #ff2c2c !important;
`;

const StyledLayout = styled(Layout)`
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo img {
    display: flex;
    justify-content: center;
  }

  min-height: 100vh;
  min-width: 100vw;
`;

const StyledHeader = styled(Header)`
  background: #ff2c2c !important;
`;
const LogoContainer = styled.div`
  padding: 4px 8px;
  height: 100px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    // <FullLayout>
    <StyledLayout>
      <GlobalStyle />
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        <LogoContainer>
          <img src={logo} width="100%" height="auto"></img>
        </LogoContainer>
        <StyledMenu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </StyledSider>
      <Layout className="site-layout">
        <StyledHeader
          style={{
            padding: 0,
            background: colorBgContainer,
            height: 100,
          }}
        ></StyledHeader>
        <Content
          style={{
            margin: "",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </StyledLayout>
    // </FullLayout>
  );
};
export default App;

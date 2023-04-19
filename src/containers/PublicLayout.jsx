import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoAia from '../assets/image/AIA-logo.png'
import styled from "styled-components";
import { Layout, Menu } from "antd";

function PublicLayout({ children }) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <LayoutStyle>
            <SiderStyle
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <LogoContainer>
                    <img src={logoAia} style={{
                        width: "87%"
                    }} alt="" />
                </LogoContainer>

                <MenuStyle
                    mode="inline"
                    defaultSelectedKeys={
                        location.pathname === "/home/email" ? ["1"] : ["2"]
                    }
                >
                    <MenuStyle.Item
                        key="1"
                        onClick={() => navigate('/home/email')}
                    >
                        Email Editor
                    </MenuStyle.Item>
                    <MenuStyle.Item
                        key="2"
                        onClick={() => navigate('/home/settings')}
                    >
                        Settings
                    </MenuStyle.Item>

                </MenuStyle>
            </SiderStyle>
            <LayoutStyle>
                <HeaderStyle />
                <ContentStyle>
                    {children}
                </ContentStyle>
            </LayoutStyle>
        </LayoutStyle>
    );
};

const { Header, Content, Sider } = Layout;

const LayoutStyle = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  background: #f7f7f8;
`;

const MenuStyle = styled(Menu)`
  background: none;
  color: white;
  margin-top: 1rem;

  .ant-menu-item-selected {
    background: rgba(85, 67, 68, 0.6);
    color: white;
    border-right: 4px solid white;
    font-weight: bold;
  }

  .ant-menu-item {
    border-radius: 0;
    width: 100%;
    margin: 0;
  }

  .ant-menu-item:hover {
    color: white !important;
    background: rgba(85, 67, 68, 0.6);
  }
`;

const SiderStyle = styled(Sider)`
  background: #db0026 !important;
`;

const HeaderStyle = styled(Header)`
  background: #db0026;
`;

const ContentStyle = styled(Content)`
  background: white;
  margin: 20px;
`;

const LogoContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PublicLayout;
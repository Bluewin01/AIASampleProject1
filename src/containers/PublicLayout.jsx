import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoAia from '../assets/image/AIA-logo.png'
import {
    LayoutStyle, SiderStyle, MenuStyle,
    HeaderStyle, ContentStyle, LogoContainer,
} from '../components/PublicLayout-style'

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
                        width: "73%"
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
export default PublicLayout;
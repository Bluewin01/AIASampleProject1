import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

export const LayoutStyle = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  background: #f7f7f8;
`;

export const MenuStyle = styled(Menu)`
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

export const SiderStyle = styled(Sider)`
  background: #db0026 !important;
`;

export const HeaderStyle = styled(Header)`
  background: #db0026;
`;

export const ContentStyle = styled(Content)`
  background: white;
  margin: 20px;
`;

export const LogoContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

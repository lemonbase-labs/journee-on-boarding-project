import styled from '@emotion/styled';
import { Layout as AntdLayout } from 'antd';
import PaletteColor from 'styles/PaletteColor';

const { Header: AntdHeader, Content: AntdContent } = AntdLayout;

export const Layout = styled(AntdLayout)`
  height: 100vh;
  overflow: auto;
`;

export const Header = styled(AntdHeader)`
  background-color: ${PaletteColor.white};
`;

export const Content = styled(AntdContent)`
  background-color: ${PaletteColor.white};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export default {
  Layout,
  Header,
  Content,
};

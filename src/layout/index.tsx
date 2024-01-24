import { PropsWithChildren } from 'react';
import { PATHS } from 'router/paths';
import Logo from '@assets/logo.svg';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { Layout as AntdLayout } from 'antd';
import PaletteColor from 'styles/PaletteColor';
import SemanticColor from 'styles/SemanticColor';

const { Header: AntdHeader, Content: AntdContent } = AntdLayout;

function PublicLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Header>
        <Link to={PATHS.ROOT}>
          <img src={Logo} alt="logo" />
        </Link>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
}

const Layout = styled(AntdLayout)`
  height: 100vh;
  overflow: auto;
`;

const Header = styled(AntdHeader)`
  background-color: ${PaletteColor.white};
`;

const Content = styled(AntdContent)`
  background-color: ${SemanticColor.Layout.Background};
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export default PublicLayout;

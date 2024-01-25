import { PropsWithChildren } from 'react';
import { PATHS } from 'router/paths';
import Logo from '@assets/logo.svg';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { Layout as AntdLayout, Button, Space, message } from 'antd';
import PaletteColor from 'styles/PaletteColor';
import SemanticColor from 'styles/SemanticColor';
import useIsLogin from 'hooks/auth/useIsLogin';
import useLogout from '@apis/auth/useLogout';

const { Header: AntdHeader, Content: AntdContent } = AntdLayout;

function Layout({ children }: PropsWithChildren) {
  const { isLogin, onLogout } = useIsLogin();
  const { logout } = useLogout({
    onSuccess: onLogout,
    onError: message.error,
  });

  return (
    <StyledLayout>
      <Header>
        <Space size={20} style={{ width: '100%', justifyContent: 'space-between' }}>
          <Link to={PATHS.ROOT}>
            <img src={Logo} alt="logo" />
          </Link>
          {isLogin && <Button onClick={() => logout()}>로그아웃</Button>}
        </Space>
      </Header>
      <Content>{children}</Content>
    </StyledLayout>
  );
}

const StyledLayout = styled(AntdLayout)`
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

export default Layout;

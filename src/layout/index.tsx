import { PropsWithChildren } from 'react';
import * as S from './styles';
import { PATHS } from 'router/paths';
import Logo from '@assets/logo.svg';

function Layout({ children }: PropsWithChildren) {
  return (
    <S.Layout>
      <S.Header>
        <a href={PATHS.ROOT}>
          <img src={Logo} alt="logo" />
        </a>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Layout>
  );
}

export default Layout;

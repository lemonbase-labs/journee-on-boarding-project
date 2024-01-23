import { Button, Space } from 'antd';
import Spacer from 'components/common/Spacer';
import useIsLogin from 'hooks/auth/useIsLogin';
import Layout from 'layout';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'router/paths';
import { Headline1, Headline3 } from 'styles/typography';

function IntroPage() {
  const { isLogin } = useIsLogin();
  const navigate = useNavigate();

  if (isLogin) {
    navigate(PATHS.APP);
  }

  return (
    <Layout>
      <Space direction="vertical" align="center">
        <Marquee>
          <Headline1>👋 안녕하세요! 저니의 온보딩 프로젝트에 오신걸 환영해요</Headline1>
        </Marquee>
        <Spacer height={10} />
        <Marquee direction="right">
          <Headline3>레몬베이스 최고의 동료들과 함께하는 건강한 성장의 시작 🍋</Headline3>
        </Marquee>
        <Spacer height={100} />
        <Headline3>👇 데모 기능 목록 👇</Headline3>
        <Space>
          <Button type="primary" onClick={() => navigate(PATHS.APP)}>
            리뷰 사이클 바로가기
          </Button>
          <Button onClick={() => navigate(PATHS.SIGN_UP)}>회원가입 바로가기</Button>
          <Button type="primary" onClick={() => navigate(PATHS.LOGIN)}>
            로그인 바로가기
          </Button>
        </Space>
      </Space>
    </Layout>
  );
}

export default IntroPage;

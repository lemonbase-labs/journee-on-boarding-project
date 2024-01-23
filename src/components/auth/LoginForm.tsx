import { Button, Form, Space, message } from 'antd';
import { Headline3 } from 'styles/typography';
import AuthForm from './common/EmailPasswordFormItems';
import Spacer from 'components/common/Spacer';
import { PATHS } from 'router/paths';
import useLoginAPI from '@apis/auth/useLoginAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsLogin from 'hooks/auth/useIsLogin';

function LoginForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { onLogin } = useIsLogin();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setIsSubmitDisabled(hasErrors);
  };

  const { login, isLoading } = useLoginAPI({
    onSuccess: () => {
      onLogin();
      navigate(PATHS.APP);
    },
    onError: showErrorMessage,
  });

  function showErrorMessage(errorMsg: string) {
    message.error(errorMsg);
  }

  return (
    <Space direction="vertical" style={{ minWidth: '400px' }}>
      <Headline3 style={{ textAlign: 'center' }}>로그인</Headline3>
      <Spacer height={30} />
      <Form requiredMark={false} form={form} layout="vertical" onFinish={login} onFieldsChange={handleFormChange}>
        <AuthForm />
        <Button size="large" type="primary" htmlType="submit" loading={isLoading} disabled={isSubmitDisabled} block>
          이메일로 로그인하기
        </Button>
        <Spacer height={10} />
        <Button type="link" onClick={() => navigate(PATHS.SIGN_UP)} block>
          아직 계정이 없으신가요? 회원가입
        </Button>
      </Form>
    </Space>
  );
}

export default LoginForm;

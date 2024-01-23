import { Button, Form, Input, Space, message } from 'antd';
import { Body3, Headline3 } from 'styles/typography';
import EmailPasswordFormItems from './common/EmailPasswordFormItems';
import Spacer from 'components/common/Spacer';
import { PATHS } from 'router/paths';
import { useState } from 'react';
import useSignUpAPI from '@apis/auth/useSignUpAPI';
import { useNavigate } from 'react-router-dom';
import { AUTH_FORM_ITEM_NAMES, AUTH_RULES } from './constants';

function SignUpForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setIsSubmitDisabled(hasErrors);
  };

  const { signUp, isLoading } = useSignUpAPI({
    onSuccess: () => navigate(PATHS.APP),
    onError: showErrorMessage,
  });

  function showErrorMessage(errorMsg: string) {
    message.error(errorMsg);
  }

  return (
    <Space direction="vertical" style={{ minWidth: '400px' }}>
      <Headline3 style={{ textAlign: 'center' }}>회원가입</Headline3>
      <Spacer height={30} />
      <Form
        requiredMark={false}
        form={form}
        layout="vertical"
        onFinish={signUp}
        onFieldsChange={handleFormChange}
        initialValues={{ email: '', password: '', userName: '' }}
      >
        <EmailPasswordFormItems />
        <Form.Item
          label={<Body3>이름</Body3>}
          name={AUTH_FORM_ITEM_NAMES.userName}
          colon={false}
          rules={AUTH_RULES.userName}
          getValueFromEvent={e => e.target.value.trim()}
        >
          <Input size="large" autoFocus placeholder="이름을 입력하세요" autoComplete="off" />
        </Form.Item>
        <Button size="large" type="primary" htmlType="submit" loading={isLoading} disabled={isSubmitDisabled} block>
          이메일로 회원가입하기
        </Button>
        <Spacer height={10} />
        <Button type="link" onClick={() => navigate(PATHS.LOGIN)} block>
          이미 계정이 있으신가요? 로그인
        </Button>
      </Form>
    </Space>
  );
}

export default SignUpForm;

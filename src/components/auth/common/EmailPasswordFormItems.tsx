import { Body3 } from 'styles/typography';
import { Form, Input } from 'antd';
import { AUTH_FORM_ITEM_NAMES, AUTH_RULES } from '../constants';

function EmailPasswordFormItems() {
  return (
    <>
      <Form.Item
        label={<Body3>이메일</Body3>}
        name={AUTH_FORM_ITEM_NAMES.email}
        colon={false}
        rules={AUTH_RULES.email}
        getValueFromEvent={e => e.target.value.trim()}
      >
        <Input size="large" autoFocus placeholder="회사 이메일을 입력하세요" autoComplete="off" />
      </Form.Item>
      <Form.Item
        label={<Body3>비밀번호</Body3>}
        name={AUTH_FORM_ITEM_NAMES.password}
        colon={false}
        rules={AUTH_RULES.password}
        getValueFromEvent={e => e.target.value.trim()}
      >
        <Input.Password size="large" placeholder="비밀번호를 입력하세요" autoComplete="off" />
      </Form.Item>
    </>
  );
}

export default EmailPasswordFormItems;

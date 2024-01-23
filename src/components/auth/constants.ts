import { Rule } from 'antd/lib/form';

export const AUTH_FORM_ITEM_NAMES = {
  email: 'email',
  password: 'password',
  userName: 'userName',
};

export const AUTH_RULES: Record<string, Rule[]> = {
  email: [
    { required: true, message: '이메일을 입력하세요.' },
    { type: 'email', message: '이메일 형식이 올바르지 않습니다.' },
  ],
  password: [
    { required: true, message: '비밀번호를 입력하세요.' },
    { min: 6, message: '비밀번호는 6자 이상이어야 합니다.' },
  ],
  userName: [
    { required: true, message: '이름을 입력하세요.' },
    { min: 2, message: '이름은 2자 이상이어야 합니다.' },
  ],
};

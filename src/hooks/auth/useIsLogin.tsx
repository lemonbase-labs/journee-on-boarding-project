import { removeAccessToken } from '@apis/data';
import { message } from 'antd';
import { atom, useAtom } from 'jotai';

const isLoginAtom = atom<boolean>(!!localStorage.getItem('refreshToken'));

export default function useIsLogin() {
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);

  function onLogin() {
    setIsLogin(true);
  }

  function onLogout() {
    setIsLogin(false);
    removeAccessToken();
    message.success('로그아웃 되었습니다.');
  }

  return { isLogin, onLogin, onLogout };
}

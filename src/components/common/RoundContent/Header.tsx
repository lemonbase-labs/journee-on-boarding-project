import { Space } from 'antd';
import { Headline3 } from 'styles/typography';

interface Props {
  title: string;
  rightArea: React.ReactNode;
}

function Header({ title, rightArea }: Props) {
  return (
    <Space align="center">
      <Headline3>{title}</Headline3>
      <Space>{rightArea}</Space>
    </Space>
  );
}

export default Header;

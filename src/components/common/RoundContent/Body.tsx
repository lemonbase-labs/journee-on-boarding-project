import { Space } from 'antd';

function Body({ children }: { children: React.ReactNode }) {
  return (
    <Space align="center" style={{ width: '100%' }}>
      {children}
    </Space>
  );
}

export default Body;

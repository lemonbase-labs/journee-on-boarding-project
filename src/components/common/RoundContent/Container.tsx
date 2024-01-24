import { Content } from 'antd/lib/layout/layout';
import { PropsWithChildren } from 'react';
import SemanticColor from 'styles/SemanticColor';

function Container({ children }: PropsWithChildren) {
  return (
    <Content
      style={{
        padding: 24,
        margin: 36,
        minHeight: 280,
        background: SemanticColor.Layout.Box,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Content>
  );
}

export default Container;

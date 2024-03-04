import { Modal, ModalProps } from 'antd';
import { useState } from 'react';

interface Props extends ModalProps {
  destroyOnClose?: boolean;
}

export default function useModal() {
  const [visible, setIsVisible] = useState(false);

  function render({ destroyOnClose = true, ...props }: Props) {
    return (
      <Modal
        destroyOnClose={destroyOnClose}
        visible={visible}
        onCancel={() => setIsVisible(false)}
        footer={null}
        {...props}
      >
        {props.children}
      </Modal>
    );
  }

  function open() {
    setIsVisible(true);
  }

  function close() {
    setIsVisible(false);
  }

  return {
    visible,
    render,
    open,
    close,
  };
}

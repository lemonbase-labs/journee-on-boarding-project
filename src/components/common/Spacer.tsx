interface Props {
  width?: number;
  height?: number;
}

function Spacer({ width, height }: Props) {
  return <div style={{ width, height }} />;
}

export default Spacer;

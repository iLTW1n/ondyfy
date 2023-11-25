const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '28px',
    padding: '12px 24px',
  },
};

const defaultProps = {
  text: 'Crea tu cuenta en OnDyFy',
};

const Text2 = (props: any) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text2;

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '16px',
  },
};

const defaultProps = {
  text: 'Bienvenido a tu Asistente Personal',
};

const Text3 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text3;

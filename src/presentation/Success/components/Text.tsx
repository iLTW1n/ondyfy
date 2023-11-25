const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '28px',
    textAlign: 'center',
    padding: '24px 24px 120px',
  },
};

const defaultProps = {
  text: 'Ya estás Registrado Bienvenido',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

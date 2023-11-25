const styles = {
  Text: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '22px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Estoy aqui para ayudarte, dime con qué tema quieres iniciar?',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

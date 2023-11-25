const styles = {
  Text: {
    color: '#030303',
    fontSize: '36px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '47px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Bienvenido a OnDyFy',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

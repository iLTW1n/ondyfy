const styles = {
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '20px',
  },
};

const defaultProps = {
  text: 'Sobre Nosotros',
};

const Text2 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text2;

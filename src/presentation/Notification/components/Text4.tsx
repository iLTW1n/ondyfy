const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Esta Semana',
};

const Text4 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text4;

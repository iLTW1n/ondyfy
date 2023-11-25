const styles = {
  Text: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '16px',
  },
};

const defaultProps = {
  text: '1h 53m',
};

const Text3 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text3;

const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '16px',
    textAlign: 'center',
    marginBottom: '12px',
  },
};

const defaultProps = {
  text: '11:00 AM',
};

const Text4 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text4;

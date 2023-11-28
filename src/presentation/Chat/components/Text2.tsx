const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '22px',
    textAlign: 'left',
  },
};

const defaultProps = {
  text: 'OnDyFyBot',
};

const Text2 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text2;

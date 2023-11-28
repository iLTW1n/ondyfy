const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'left',
  },
};

const defaultProps = {
  text: 'Temas',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

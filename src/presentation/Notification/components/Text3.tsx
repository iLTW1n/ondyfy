const styles = {
  Text: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    textAlign: 'center',
    maxWidth: '200px',
  },
};

const defaultProps = {
  text: 'No te olvides de completar la sección de complience',
};

const Text3 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text3;

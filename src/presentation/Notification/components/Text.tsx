const styles = {
  Text: {
    color: '#030303',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '32px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Notificaciones',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

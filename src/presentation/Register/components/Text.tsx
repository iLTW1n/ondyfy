const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '30px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '28px',
  },
};

const defaultProps = {
  text: 'Bienvenido a OnDyFy',
};

const Text = (props: any) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

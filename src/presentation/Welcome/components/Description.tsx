const styles = {
  Text: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 300,
    lineHeight: '26px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Inicia el proceso de Onboarding con tu asistente personal que sabe todo lo que necesitas para que siempre estés al día.',
};

const Description = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Description;

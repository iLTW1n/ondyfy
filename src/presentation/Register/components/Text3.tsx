const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '28px',
  },
};

const defaultProps = {
  text: 'Todo lo que necesitas saber en un BOTShell',
};

const Text3 = (props: any) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text3;

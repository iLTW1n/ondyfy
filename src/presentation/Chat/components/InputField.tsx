const styles = {
  Input: {
    top: '597px',
    left: '48px',
    width: '311px',
    height: '54px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '2px 2px 4px rgba(3,3,3,0.1)',
    backgroundColor: '#f5f5f5',
    color: '#8a8a8a',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '22px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Escribe tus consultas aquí...',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;

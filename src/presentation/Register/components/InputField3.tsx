const styles = {
  Input: {
    top: '335px',
    left: '24px',
    width: '327px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#f5f5f5',
    color: '#8a8a8a',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '20px',
    outline: 'none',
      marginBottom: '15px',
  },
};

const defaultProps = {
  text: 'Apellido ',
};

const InputField3 = (props: any) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField3;

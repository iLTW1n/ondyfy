const styles = {
  Button: {
    cursor: 'pointer',
    top: '595px',
    left: '24px',
    width: '327px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#fa8f24',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '20px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Regístrate',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;

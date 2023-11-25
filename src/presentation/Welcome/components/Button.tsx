const styles = {
  Button: {
    cursor: 'pointer',
    top: '575px',
    left: '34px',
    width: '308px',
    height: '40px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#138476',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: '500',
    lineHeight: '21px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Iniciar Aquí',
};

const Button = (props: any) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;

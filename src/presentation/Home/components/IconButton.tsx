const styles = {
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '16px',
    left: '320px',
    width: '32px',
    height: '32px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#000000',
    backgroundColor: '#84ff27',
    outline: 'none',
  },
  Icon: {
    color: '#000000',
    fill: '#000000',
    width: '14px',
    height: '14px',
    fontSize: '14px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 384 512">
    <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const IconButton = (props) => {
  return (
    <button style={styles.Button}>
      {
        props.IconComponent
          ? <props.IconComponent style={styles.Icon} />
          : <defaultProps.IconComponent />
      }
    </button>
  );
};

export default IconButton;

const styles = {
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '261px',
    left: '240px',
    width: '64px',
    height: '64px',
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
    width: '34px',
    height: '34px',
    fontSize: '34px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
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

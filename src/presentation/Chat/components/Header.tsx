const styles = {
  Header: {
    top: '0px',
    left: '0px',
    width: '375px',
    height: '64px',
    backgroundColor: '#282828',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
};

const Header = (props: any) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;

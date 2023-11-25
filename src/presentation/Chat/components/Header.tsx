const styles = {
  Header: {
    top: '0px',
    left: '0px',
    width: '375px',
    height: '64px',
    backgroundColor: '#282828',
  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;

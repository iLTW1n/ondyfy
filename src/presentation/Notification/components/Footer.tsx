const styles = {
  Footer: {
    top: '611px',
    left: '0px',
    width: '375px',
    height: '56px',
    backgroundColor: '#138476',
  },
};

const Footer = (props) => {
  return (
    <div style={styles.Footer}>
      {props.children}
    </div>
  );
};

export default Footer;

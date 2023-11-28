const styles = {
  Footer: {
    top: '611px',
    left: '0px',
    width: '375px',
    backgroundColor: '#138476',
    padding: '15px 20px',
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

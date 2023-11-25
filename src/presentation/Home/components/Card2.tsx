const styles = {
  Card: {
    top: '249px',
    left: '50px',
    width: '190px',
    height: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
  },
};

const Card2 = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card2;

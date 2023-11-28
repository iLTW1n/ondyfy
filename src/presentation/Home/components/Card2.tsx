const styles = {
  Card: {
    top: '249px',
    left: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
    color: '#030303',
    padding: '6px 12px',
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

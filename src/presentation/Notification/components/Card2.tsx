const styles = {
  Card: {
    top: '292px',
    left: '20px',
    width: '335px',
    height: '56px',
    backgroundColor: '#f5f5f5',
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

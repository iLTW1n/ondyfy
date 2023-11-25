const styles = {
  Card: {
    top: '603px',
    left: '161px',
    width: '56px',
    height: '56px',
    backgroundColor: '#ffffff',
    borderRadius: '100px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
  },
};

const Card3 = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card3;

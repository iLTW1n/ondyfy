const styles = {
  Card: {
    top: '140px',
    left: '24px',
    width: '288px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
    padding: '6px',
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card;

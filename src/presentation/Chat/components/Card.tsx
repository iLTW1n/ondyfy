const styles = {
  Card: {
    top: '96px',
    left: '15px',
    width: '234px',
    height: '62px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
    marginRight: '12px',
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

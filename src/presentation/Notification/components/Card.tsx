const styles = {
  Card: {
    top: '122px',
    left: '20px',
    width: '335px',
    height: '56px',
    backgroundColor: '#e5e5e5',
    borderRadius: '24px',
    border: '1px solid #8a8a8a',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
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

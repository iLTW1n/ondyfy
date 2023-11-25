const styles = {
  Card: {
    top: '343px',
    left: '148px',
    width: '211px',
    height: '38px',
    backgroundColor: '#84ff27',
    borderRadius: '24px',
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

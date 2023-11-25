const styles = {
  Card: {
    top: '179px',
    left: '0px',
    width: '375px',
    height: '509px',
    backgroundColor: '#282828',
    borderRadius: '24px',
    textAlign: 'center',
  },
};

const Card = (props: any) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card;

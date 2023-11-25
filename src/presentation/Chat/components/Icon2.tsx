const styles = {
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '20px',
    top: '614px',
    left: '14px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon2 = (props) => {
  return (
    props.IconComponent
      ? <props.IconComponent style={styles.Icon} />
      : <defaultProps.IconComponent />
  );
};

export default Icon2;

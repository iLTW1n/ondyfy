const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '630px',
    left: '24px',
    width: '24px',
    height: '18px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon5 = (props) => {
  return (
    props.IconComponent
      ? <props.IconComponent style={styles.Icon} />
      : <defaultProps.IconComponent />
  );
};

export default Icon5;

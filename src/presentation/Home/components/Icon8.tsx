const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '624px',
    left: '253px',
    width: '24px',
    height: '24px',
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

const Icon8 = (props) => {
  return (
    props.IconComponent
      ? <props.IconComponent style={styles.Icon} />
      : <defaultProps.IconComponent />
  );
};

export default Icon8;

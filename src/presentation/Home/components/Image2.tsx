const styles = {
  ImageContainer: {
    top: '253px',
    left: '54px',
    width: '32px',
    height: '32px',
    borderRadius: '100000px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/cd8c9896-25ab-4fdf-95e6-d69746a50eea.png',
}

const Image2 = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image2;

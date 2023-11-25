const styles = {
  ImageContainer: {
    top: '113px',
    left: '101px',
    width: '174px',
    height: '174px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/cd8c9896-25ab-4fdf-95e6-d69746a50eea.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;

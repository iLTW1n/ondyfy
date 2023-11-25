const styles = {
  ImageContainer: {
    top: '0px',
    left: '0px',
    width: '375px',
    height: '667px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/705b4d47-d44b-40f7-b1ed-4c521baff6df.png',
}

const Image = (props: any) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} >
      {props.children}
    </div>
  );
};

export default Image;

import Text from "./components/Text.tsx";
import Image from "./components/Image.tsx";
import IconButton from "./components/IconButton.tsx";
import Button from "./components/Button.tsx";

const styles = {
  Container: {
    textAlign: 'center',
  },
    Icon: {
      textAlign: 'right',
    }
};

const Success = () => {
    return (
        <div styles={styles.Container}>
            <div>
                <Image />
                {/*<div styles={styles.Icon}>*/}
                {/*    <IconButton />*/}
                {/*</div>*/}
            </div>
            <Text />
            <Button />
        </div>
    );
}

export default Success;

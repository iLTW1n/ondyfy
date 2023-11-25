import React from "react";
import Text from "./components/Text.tsx";
import Description from "./components/Description.tsx";
import Image from "./components/Image.tsx";
import Button from "./components/Button.tsx";

const styles = {
  Container: {
    textAlign: 'center',
  },
};

const Welcome = () => {
    return (
        <div styles={styles.Container}>
            <Text />
            <Description />
            <div>
                <Image />
            </div>
            <Button />
        </div>
    );
}

export default Welcome;

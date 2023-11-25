import React from "react";
import Header from "./components/Header.tsx";
import Icon from "./components/Icon.tsx";
import Icon2 from "./components/Icon2.tsx";
import Image from "./components/Image.tsx";
import Text from "./components/Text.tsx";
import Text2 from "./components/Text2.tsx";
import Text3 from "./components/Text3.tsx";

const styles = {
  Container: {
    textAlign: 'center',
  },
};

const Welcome = () => {
    return (
        <div styles={styles.Container}>
            <Header>
                <Image />
                <div>
                    <Text2 />
                    <Text3 />
                </div>
            </Header>
        </div>
    );
}

export default Welcome;

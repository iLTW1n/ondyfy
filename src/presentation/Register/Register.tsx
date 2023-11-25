import Image from "./components/Image.tsx";
import Text from "./components/Text.tsx";
import Text2 from "./components/Text2.tsx";
import Text3 from "./components/Text3.tsx";
import Card from "./components/Card.tsx";
import InputField1 from "./components/InputField1.tsx";
import InputField2 from "./components/InputField2.tsx";
import InputField3 from "./components/InputField3.tsx";
import InputField4 from "./components/InputField4.tsx";
import InputField5 from "./components/InputField5.tsx";
import IconButton from "./components/IconButton.tsx";
import Icon from "./components/Icon.tsx";
import Button from "./components/Button.tsx";

const styles = {
  Container: {
    textAlign: 'center',
  },
};

const Register = () => {
    return (
        <div styles={styles.Container}>
            <Image>
                <Icon />
                <Text />
                <Text3 />
                <Card>
                    <Text2 />
                    <InputField1 />
                    <InputField2 />
                    <InputField3 />
                    <InputField4 />
                    <InputField5 />
                    <Button />
                </Card>
            </Image>
        </div>
    )
}

export default Register;

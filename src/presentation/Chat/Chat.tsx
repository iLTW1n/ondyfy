import Header from "./components/Header.tsx";
import Icon from "./components/Icon.tsx";
import Icon2 from "./components/Icon2.tsx";
import Image from "./components/Image.tsx";
import Text from "./components/Text.tsx";
import Text2 from "./components/Text2.tsx";
import Text3 from "./components/Text3.tsx";
import Text4 from "./components/Text4.tsx";
import Card from "./components/Card.tsx";
import Card2 from "./components/Card2.tsx";
import InputField from "./components/InputField.tsx";

const styles = {
    Container: {
        textAlign: 'center',
    },
    Body: {
        padding: '12px',
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '12px',
    },
    Row2: {
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        marginBottom: '12px',
    },
    Header: {
        textAlign: 'left',
    }
};

const Welcome = () => {
    return (
        <div style={styles.Container}>
            <Header>
                <Image />
                <div style={styles.Header}>
                    <Text2 />
                    <Text3 />
                </div>
            </Header>
            <div style={styles.Body}>
                <div style={styles.Row}>
                    <Card><Text /></Card>
                    <Icon />
                </div>
                <div style={styles.Row2}>
                    <Card2><Text text={'Me puedes aclarar sobre los beneficios?'} /></Card2>
                </div>
                <Text4 />
                <div style={styles.Row}>
                    <Card><Text /></Card>
                </div>
                <div style={styles.Row2}>
                    <Card2><Text text={'Vacaciones'} /></Card2>
                </div>
                <div style={styles.Row2}>
                    <Card2><Text text={'y tambien permisos por salud'} /></Card2>
                </div>
                <div style={styles.Row}>
                    <Card><Text /></Card>
                    <Icon />
                </div>
            </div>
            <div>
                <Icon2 />
                <InputField />
            </div>
        </div>
    );
}

export default Welcome;

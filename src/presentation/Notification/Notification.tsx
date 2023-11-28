import Icon from "./components/Icon.tsx";
import Icon2 from "./components/Icon2.tsx";
import Icon3 from "./components/Icon3.tsx";
import Icon4 from "./components/Icon4.tsx";
import Icon5 from "./components/Icon5.tsx";
import Icon6 from "./components/Icon6.tsx";
import Icon7 from "./components/Icon7.tsx";
import Icon8 from "./components/Icon8.tsx";
import Icon9 from "./components/Icon9.tsx";
import Image from "./components/Image.tsx";
import Text from "./components/Text.tsx";
import Text2 from "./components/Text2.tsx";
import Text3 from "./components/Text3.tsx";
import Text4 from "./components/Text4.tsx";
import Card from "./components/Card.tsx";
import Footer from "./components/Footer.tsx";

const styles = {
    Container: {
        textAlign: 'center',
    },
    Head: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Title: {
        marginBottom: '12px',
    },
    Body: {
        padding: '25px 12px',
    },
    Row: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '12px',
    },
    Footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};

const Notification = () => {
    return (
        <div style={styles.Container}>
            <div style={styles.Head}>
                <Icon />
                <Text />
                <Icon2 />
            </div>
            <div style={styles.Body}>
                <div style={styles.Title}>
                    <Text2 />
                </div>
                <div style={styles.Row}>
                    <Card>
                        <Icon3 />
                        <Text3 />
                        <Image />
                    </Card>
                </div>
                <div style={styles.Row}>
                    <Card>
                        <Icon4 />
                        <Text3 />
                        <Image />
                    </Card>
                </div>
                <Text4 />
                <div style={styles.Row}>
                    <Card />
                </div>
                <div style={styles.Row}>
                    <Card />
                </div>
            </div>
            <Footer>
                <div style={styles.Footer}>
                    <Icon5 />
                    <Icon6 />
                    <Icon7 />
                    <Icon8 />
                    <Icon9 />
                </div>
            </Footer>
        </div>
    );
}

export default Notification;

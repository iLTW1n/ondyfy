import IconButton from "./components/IconButton.tsx";
import Icon from "./components/Icon.tsx";
import Image from "./components/Image.tsx";
import Image2 from "./components/Image2.tsx";
import Text from "./components/Text.tsx";
import Text3 from "./components/Text3.tsx";
import Card from "./components/Card.tsx";
import Card2 from "./components/Card2.tsx";
import Button from "./components/Button.tsx";
import Footer from "./components/Footer.tsx";
import Icon5 from "../Notification/components/Icon5.tsx";
import Icon6 from "../Notification/components/Icon6.tsx";
import Icon7 from "../Notification/components/Icon7.tsx";
import Icon8 from "../Notification/components/Icon8.tsx";
import Icon9 from "../Notification/components/Icon9.tsx";

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
        alignItems: 'center',
        marginBottom: '12px',
        justifyContent: 'space-between',
    },
    Footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Footer2: {
        textAlign: 'center',
    },
    Footer1: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};

const Home = () => {
    return (
        <div style={styles.Container}>
            <div style={styles.Head}>
                <Image2 />
                <IconButton />
            </div>
            <div style={styles.Body}>
                <div style={styles.Title}>
                    <Text />
                </div>
                <div style={styles.Row}>
                    <Card>
                        <Image />
                        <div style={styles.Footer1}>
                            <Text3 />
                            <Button />
                        </div>
                    </Card>
                </div>
                <div style={styles.Title}>
                    <Text text={'Areas de aprendizaje'} />
                </div>
                <div style={styles.Row}>
                    <Card2>
                        <Icon />
                        <div>Tema 1</div>
                    </Card2>
                    <Card2>
                        <Icon />
                        <div>Tema 2</div>
                    </Card2>
                    <Card2>
                        <Icon />
                        <div>Tema 3</div>
                    </Card2>
                </div>
                <div style={styles.Title}>
                    <Text text={'Mi Avance'} />
                </div>
                <div style={styles.Row}>
                    <div>
                        <Card>
                            <div>Tema 1</div>
                        </Card>
                    </div>
                </div>
                <div style={styles.Footer2}>
                    <Button label={'Ver mas'} />
                </div>
            </div>
            <div>
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
        </div>
    );
}

export default Home;

import '@/app/scss/main.scss';
import classes from './Home.module.scss';
import {CallbackSection} from "@/widgets/callback-section/ui/CallbackSection";

const Home = () => {
    return (
        <div className={`${classes.homePage__wrapper}`}>
            <div className={`${classes.homePage__content}`}>
                <div className={`${classes.homePage__callbackSection}`}>
                    <CallbackSection />
                </div>
            </div>
        </div>
    );
};

export default Home;
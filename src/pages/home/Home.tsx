import '@/app/scss/main.scss';
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div className={`${classes.homePage__wrapper}`}>
            <div className={`${classes.homePage__content}`}>
            </div>
        </div>
    );
};

export default Home;
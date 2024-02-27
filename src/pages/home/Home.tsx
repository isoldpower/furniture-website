import {Button} from "@/shared/ui/button/ui/Button";
import '@/app/scss/main.scss';

const Home = () => {
    return (
        <div>
            <Button type={'a'}>Перейти в каталог</Button>
            <Button type={'button'}>Перейти в каталог</Button>
            <Button type={'a'} data={{variant: 'primary'}}>Перейти в каталог</Button>
            <Button type={'button'} data={{variant: 'primary'}}>Перейти в каталог</Button>
            <Button type={'a'} data={{variant: 'accent'}}>Перейти в каталог</Button>
            <Button type={'button'} data={{variant: 'accent'}}>Перейти в каталог</Button>
        </div>
    );
};

export default Home;
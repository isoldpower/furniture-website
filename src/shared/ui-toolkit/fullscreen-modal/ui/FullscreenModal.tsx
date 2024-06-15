import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './FullscreenModal.module.scss';

interface FullscreenModalProps {
    children: ReactNode;
}

export const FullscreenModal: FC<FullscreenModalProps> = ({children}: FullscreenModalProps) => {
    return (
        <div className={`${classes.fullscreenModal__wrapper}`}>
            <div className={`${classes.fullscreenModal__content}`}>
                <div className={`${classes.fullscreenModal__back}`}/>
                <div className={`${classes.fullscreenModal__container} cc-main-gutter`}>
                    <div className={`${classes.fullscreenModal__containerBack} cc-bg-neutral-000 cc-border-radius-1`}/>
                    <div className={`${classes.fullscreenModal__catalogWrapper} cc-flex cc-main-gutter-content`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
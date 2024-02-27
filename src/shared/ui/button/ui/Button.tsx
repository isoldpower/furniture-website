import {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonData} from "@/shared/ui/button/model";

type ButtonProps = {
    data?: ButtonData;
} & (AnchorButton | FunctionButton)

type AnchorButton = {type: 'a'} & AnchorHTMLAttributes<HTMLAnchorElement>;
type FunctionButton = {type: 'button'} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({className, data, ...props}: ButtonProps) => {
    if(props.type === 'button')
        return <button className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} />
    else if(props.type === 'a')
        return <a className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} />
};
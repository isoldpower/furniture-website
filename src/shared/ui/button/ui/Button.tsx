import {ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonData} from "@/shared/ui/button/model";
import {NavLink, NavLinkProps} from "react-router-dom";

type ButtonProps = {
    data?: ButtonData;
} & (AnchorButton | FunctionButton)

type AnchorButton = {semantic: 'link'} & NavLinkProps;
type FunctionButton = {semantic: 'button'} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({className, data, ...props}: ButtonProps) => {
    if(props.semantic === 'button')
        return <button className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} />
    else if(props.semantic === 'link')
        return <NavLink className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} />
};
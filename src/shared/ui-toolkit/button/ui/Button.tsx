import {ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonData} from "@/shared/ui-toolkit/button/model";
import {AdaptiveLink} from "@/shared/ui-toolkit";
import {LinkProps} from "react-router-dom";

type ButtonProps = {
    data?: ButtonData;
} & (AnchorButton | FunctionButton)

type AnchorButton = {semantic: 'link', to: string} & LinkProps;
type FunctionButton = {semantic: 'button'} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({className, data, ...props}: ButtonProps) => {
    if(props.semantic === 'button')
        return <button className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} type='button'/>
    else if(props.semantic === 'link')
        return <AdaptiveLink className={`${className} ${classes.button}`} itemType={data?.variant ?? 'default'} {...props} />
};
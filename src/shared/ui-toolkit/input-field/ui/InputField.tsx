import {FC, InputHTMLAttributes} from "react";
import '@/app/scss/main.scss';
import classes from './InputField.module.scss';
import {InputFieldData} from "@/shared/ui-toolkit/input-field/model";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    data: InputFieldData;
}

export const InputField: FC<InputFieldProps> = ({className, data, ...props}: InputFieldProps) => {
    return (
        <div className={`${classes.inputField__wrapper} cc-grid cc-gap-3`}>
            <div className={`${classes.inputField__heading}`}>{data.title}</div>
            <input {...props} className={`${classes.inputField__field} ${className} cc-border-radius-1 cc-bg-neutral-000 cc-width-1of1`}/>
        </div>
    );
};
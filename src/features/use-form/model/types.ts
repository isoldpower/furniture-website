import {ChangeEvent} from "react";

export type FieldState = 'default' | 'correct' | 'wrong';

export interface FormFieldReturn {
    onInput: (event: ChangeEvent<HTMLInputElement>) => void;
    state: FieldState;
    validate: () => void;
    value: string;
}

export interface FormData {
    name: FormFieldReturn;
    mail: FormFieldReturn;
    phone: FormFieldReturn;
}
import {FormEvent} from "react";

export type FieldState = 'default' | 'correct' | 'wrong';

export interface FormFieldReturn {
    onInput: (event: FormEvent<HTMLInputElement>) => void;
    state: FieldState;
    value: string;
}
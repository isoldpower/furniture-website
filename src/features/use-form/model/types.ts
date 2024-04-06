import {ChangeEvent} from "react";
import {Product} from "@/entities/product";

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

export interface UseFormReturn {
    requestCall: (product: Product) => void,
    data: FormData,
    isSuccess: boolean
}
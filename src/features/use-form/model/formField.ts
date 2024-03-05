import {FormEvent, useState} from "react";
import {FieldState, FormFieldReturn} from "@/features/use-form/model/types";

export const formField = (validation: RegExp): FormFieldReturn => {
    const [value, setValue] = useState<string>(undefined);
    const [state, setState] = useState<FieldState>('default');

    const validate = () => setState(validation.test(value) ? 'correct' : 'wrong');

    const changeValue = (event: FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        validate();
    }

    return {value: value, onInput: changeValue, state: state};
}
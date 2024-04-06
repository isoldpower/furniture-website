import {ChangeEvent, useEffect, useState} from "react";
import {FieldState, FormFieldReturn} from "@/features";

export const useFormField = (validation: RegExp): FormFieldReturn => {
    const [value, setValue] = useState<string>('');
    const [state, setState] = useState<FieldState>('default');

    const validate = () => {
        if (value == '') setState('default');
        else setState(validation.test(value) ? 'correct' : 'wrong');
    }

    useEffect(() => {
        validate();
    }, [value]);

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return {value: value, onInput: changeValue, validate: validate, state: state};
}
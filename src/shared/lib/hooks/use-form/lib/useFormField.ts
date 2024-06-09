import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {FieldState, FormFieldReturn} from "@/shared/lib";

export const useFormField = (validation: RegExp): FormFieldReturn => {
    const [value, setValue] = useState<string>('');
    const [state, setState] = useState<FieldState>('default');

    const validate = useCallback(() => {
        if (value == '') setState('default');
        else setState(validation.test(value) ? 'correct' : 'wrong');
    }, [validation, value]);

    useEffect(() => {
        validate();
    }, [value, validate]);

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return {value: value, onInput: changeValue, validate: validate, state: state};
}
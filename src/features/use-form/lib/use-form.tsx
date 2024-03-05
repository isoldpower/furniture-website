import {formField} from "@/features/use-form/model/formField";

export const useForm = () => {
    const nameField = formField(/^.{0,255}$/i);
    const mailField = formField(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const phoneField = formField(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i);


    const requestCall = () => {
        console.log('name:', nameField.value, '|', nameField.state);
        console.log('phone:', phoneField.value, '|', phoneField.state);
        console.log('mail:', mailField.value, '|', mailField.state);
    }

    return {requestCall, nameField, mailField, phoneField};
}
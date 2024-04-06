import {useFormField} from "./useFormField";
import {FormData} from "@/features";
import {usePostRequestMutation} from "@/app/redux";

export const useForm = () => {
    const [sendPost] = usePostRequestMutation();

    const data: FormData = {
        name: useFormField(/^.{3,255}$/i),
        mail: useFormField(/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i),
        phone: useFormField(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{5}$/i)
    }

    const requestCall = () => {
        if (data.name.state != 'correct' || data.mail.state != 'correct' || data.phone.state != 'correct')
            alert('Одно из полей, введенных вами, неверно. Пожалуйста, перепроверьте информацию')
        else sendPost(data);
    }

    return {requestCall, data};
}
import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessGrid.module.scss';
import {ProcessStep} from "@/entities/process";
import {useGetProcessQuery} from "@/widgets/process";
import {ProcessGridFx} from "@/features/process";

export const ProcessGrid: FC = () => {
    const {...query} = useGetProcessQuery();

    return (
        <ProcessGridFx {...query}>
            <div className={`${classes.processGrid__content} cc-grid cc-gap-5`}>
                {query.currentData?.map((step, key) => (
                    <ProcessStep data={step} key={key}
                        order={('0' + (key + 1)).slice(-2)} variant={key % 2 == 0 ? 'default' : 'primary'} />
                ))}
            </div>
        </ProcessGridFx>
    );
};
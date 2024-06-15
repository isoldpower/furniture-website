import {FC, Children, Fragment, ReactNode} from 'react';
import {useSettings} from "@/app/static";

interface InsertCatalogHintProps {
    children: ReactNode;
    hint: ReactNode;
}

export const InsertCatalogHints: FC<InsertCatalogHintProps> = ({children, hint}: InsertCatalogHintProps) => {
    const settings = useSettings();
    const firstIndex = Number(settings.safeData('FIRST_MORE_INDEX'));
    const frequency = Number(settings.safeData('MORE_FREQUENCY'));

    return Children.toArray(children).map((child, key) => (
        <Fragment key={key}>
            {key >= firstIndex && (key - firstIndex) % (frequency) == 0 ? hint : undefined}
            {child}
        </Fragment>
    ));
};
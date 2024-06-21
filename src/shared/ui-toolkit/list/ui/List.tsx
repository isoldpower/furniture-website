import {Children, FC, HTMLAttributes, ReactNode} from 'react';

type ListProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export const List: FC<ListProps> = ({children, ...props}: ListProps) => {
    return (
        <ul {...props}>
            {Children.toArray(children).map((child, key) => (
                <li key={key}>{child}</li>
            ))}
        </ul>
    );
};

export default List;
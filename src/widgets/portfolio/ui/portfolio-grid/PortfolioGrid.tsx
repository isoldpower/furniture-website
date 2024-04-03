import {BaseHTMLAttributes, FC, ReactNode, useEffect, useState} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioGrid.module.scss';
import {breakpoints, useDocumentSize} from "@/shared/lib";

interface ChaoticGridProps extends BaseHTMLAttributes<HTMLDivElement> {
    children: ReactNode[];
}

export const PortfolioGrid: FC<ChaoticGridProps> = ({className, children, ...props}: ChaoticGridProps) => {
    const [amountOfChunks, setAmountOfChunks] = useState<number>();
    const [chunks, setChunks] = useState<ReactNode[][]>([]);
    const length = children.length;
    const width = useDocumentSize().x;

    useEffect(() => {
        setAmountOfChunks(width >= breakpoints.laptop ? 4 : 2);
    }, [width, length]);

    useEffect(() => {
        const constantLength = Math.floor(length / amountOfChunks);
        const difference = length - constantLength * amountOfChunks;
        const buffer: ReactNode[][] = [];
        let counter = 0;

        for (let i = 0; i < amountOfChunks; i++) {
            const adjustedLength = i >= amountOfChunks - difference
                ? constantLength + 1
                : constantLength;

            buffer[i] = children.slice(counter, counter += adjustedLength);
        }

        setChunks(buffer);
    }, [amountOfChunks, children, length]);

    return (
        <div className={`${classes.portfolioGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.portfolioGrid__content} cc-grid gap-column-spacing`}>
                {chunks.map((chunk, key) => (
                    <div className={`${classes.portfolioGrid__column} cc-flex cc-flex-col gap-column-spacing`} key={key}>
                        {chunk.map((item, key) => (
                            <div className={`${classes.portfolioGrid__element} cc-flex cc-width-1of1`} key={key}>{item}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
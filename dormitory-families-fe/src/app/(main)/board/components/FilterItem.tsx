import React from "react";
import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";

interface FilterProps {
    label: string;
    active: boolean,
    href: string,
}
const FilterItem:React.FC<FilterProps> = ({label, active, href}) => {
    const router = useRouter()

    const onClick = () => {
        router.push(href)
    }

    return(
        <button className={twMerge(
            `border
             rounded-full
             p-2
             px-4
             w-[100px]
             h-[40px]
             `, active && "bg-black text-white")}
            onClick={onClick}>
            {label}
        </button>
    );
};
export default FilterItem;

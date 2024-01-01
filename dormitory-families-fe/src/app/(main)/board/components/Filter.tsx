import {usePathname} from "next/navigation";
import {useMemo} from "react";

import FilterItem from "@/app/(main)/board/components/FilterItem";
const Filter= () => {
    const pathname = usePathname();
    const routes = useMemo(
        () => [
            {
                label: "전체",
                active: pathname === "/board",
                href: "/board",
            },
            {
                label: "도와주세요‍",
                active: pathname === "/board/help",
                href: "/board/help",
            },
            {
                label: "함께해요",
                active: pathname === "/board/together",
                href: "/board/together",
            },
            {
                label: "나눔해요",
                active: pathname === "/board/share",
                href: "/board/share",
            },
            {
                label: "궁금해요",
                active: pathname === "/board/wonder",
                href: "/board/wonder",
            },
            {
                label: "분실신고",
                active: pathname === "/board/report-loss",
                href: "/board/report-loss",
            },
        ],
        [pathname]
    );
    return(
        <div className="flex gap-x-2 overflow-x-scroll overflow-hidden">
            {routes.map((route, i)=> (
                <FilterItem label={route.label} href={route.href} active={route.active}>
                </FilterItem>
            ))}
        </div>
    )
};
export default Filter;

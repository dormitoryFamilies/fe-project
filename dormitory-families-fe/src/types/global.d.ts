export interface MenuList {
    id: number;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    name: string;
    path: string;
}

export interface DormList {
    id: number;
    name: string;
}

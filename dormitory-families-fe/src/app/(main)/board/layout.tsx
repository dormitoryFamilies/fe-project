'use client';

import Filter from "@/app/(main)/board/components/Filter";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Filter />
            {children}

        </div>
    );
}

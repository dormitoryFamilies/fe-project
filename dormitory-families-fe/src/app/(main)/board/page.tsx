"use client"
import {useRouter} from "next/navigation";
import Filter from "@/app/(main)/board/components/Filter";

const Board = () => {
    const router = useRouter()
    const onClick = () => {
        router.push("/board/1")
    }
    return (
        <div>
            홈, 전체 페이지
        </div>
    );
};
export default Board;

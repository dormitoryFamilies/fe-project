"use client"
import {useRouter} from "next/navigation";

const Board = () => {
    const router = useRouter()
    const onClick = () => {
        router.push("/board/1")
    }
    return (
        <div>
            게시판 페이지입니다.
            <button
                className="bg-black text-white w-20 h-10"
                onClick={onClick}
            >상세페이지 이동
            </button>
        </div>
    );
};
export default Board;

import { IoHeart } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";

import Tag from "@/components/board/Tag";

const PostItem = () => {
    //모집중 태그 className
    const RECRUITING_STATE_STYLE = "bg-[#DAF9CF] border-[#62DC37] border-[1px]"
    //모집완료 태그 className
    const RECRUITING_COMPLETED_STATE_STYLE = "bg-[#FECCC9] border-[#FF847C] border-[1px]"
    return (
        <div className="p-5 border-gray1 border-b-[1px]">
            <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2">
                    <Tag content="도와주세요" />
                    <Tag content="모집중" className={RECRUITING_STATE_STYLE} />
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-[18px] font-semibold">바퀴벌레 잡아주실 분!!</div>
                    <div className="truncate text-[15px]">양진재 예지관 907호 바퀴벌레 나왔어요.. 제발 잡아주세요 사례해 드립니다.</div>
                </div>
                <div className="flex gap-x-2 text-[14px] text-gray2">
                    <div className="flex gap-x-1 items-center justify-center" ><IoHeart />3  |</div>
                    <div className="flex gap-x-1 items-center justify-center"><IoChatbox />2  |</div>
                    <div>10/31 18:10 |</div>
                    <div>unnimm</div>
                </div>
            </div>
        </div>
    )
}
export default PostItem;

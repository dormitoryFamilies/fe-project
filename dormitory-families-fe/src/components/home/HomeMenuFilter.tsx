const HomeMenuFilter = () => {
    return (
        <div className="flex justify-evenly gap-x-[27px] bg-secondary h-[40px] rounded-full text-h4 font-semibold mt-3">
            <button className="m-1 px-6 text-primary bg-primaryLight rounded-full font-semibold">
                아침
            </button>
            <button className="m-1 px-6">점심</button>
            <button className="m-1 px-6">저녁</button>
        </div>
    )
}
export default HomeMenuFilter;

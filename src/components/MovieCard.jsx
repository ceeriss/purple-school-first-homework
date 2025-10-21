export function MovieCard({ title, img, rating }) {
  return (
    <div className="w-[282px] h-[520px] bg-[#2a293b] relative rounded-[12px] my-[80px]">
      <div className="absolute left-[16px] top-[16px] text-[#FFAD49] text-[16px] font-[600] leading-[24px] w-[65px] h-[32px] bg-[#000000A6] rounded-[8px] flex items-center justify-center gap-[4px] ">
        <img src="../../public/star.png" alt="" />
        {rating}
      </div>
      <div className="flex justify-center my-[8px]">
        <img src={img} alt="movie-poster" />
      </div>
      <p className="mx-[16px] my-[24px] font-[600] text-[16px] leading-[24px] text-[#EBEEF5]">
        {title}
      </p>
      <div className="flex gap-[8px] my-[16px] mx-[16px] cursor-pointer">
        <img src="../../public/like.png" alt="" />
        <p className="text-[#7B6EF6] text-[16px] font-[600] leading-[24px] ">
          В избранное
        </p>
      </div>
    </div>
  );
}
